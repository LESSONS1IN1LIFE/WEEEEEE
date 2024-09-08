document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // بيانات المستخدمين
    const users = [
        { email: "admin1@example.com", password: "admin123", role: "admin" },
        { email: "admin2@example.com", password: "admin456", role: "admin" },
        { email: "teacher1@example.com", password: "teacher123", role: "teacher" },
        { email: "teacher2@example.com", password: "teacher456", role: "teacher" },
        { email: "student1@example.com", password: "student123", role: "student" },
        { email: "student2@example.com", password: "student456", role: "student" }
    ];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // توجيه المستخدم إلى الصفحة المناسبة بناءً على الدور
            switch (user.role) {
                case "admin":
                    window.location.href = "admin.html"; // صفحة المدير
                    break;
                case "teacher":
                    window.location.href = "teacher.html"; // صفحة المدرس
                    break;
                case "student":
                    window.location.href = "student.html"; // صفحة الطالب
                    break;
                default:
                    break;
            }
        } else {
            errorMessage.style.display = "block"; // عرض رسالة الخطأ
        }
    });
});