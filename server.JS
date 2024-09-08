// استيراد المكتبات
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// استبدل بـ URI الخاص بك
const mongoURI = 'mongodb+srv://MOHAMED:DR.MOHAMED12@cluster0.wg15n.mongodb.net/school?retryWrites=true&w=majority';

// الاتصال بقاعدة البيانات بدون الخيارات deprecated
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// نموذج المستخدم
const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

// مسار الجذر
app.get('/', (req, res) => {
    res.send('Welcome to the School API!'); // رسالة ترحيبية
});

// تسجيل المستخدمين
app.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8); // تشفير كلمة المرور

    const newUser = new User({ email, password: hashedPassword, role });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user.' });
    }
});

// تسجيل الدخول
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ success: true, role: user.role });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
});

// بدء الخادم
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});