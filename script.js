document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const attendanceForm = document.getElementById('attendanceForm');
    const validEmail = "admin@example.com"; // قم بتغيير هذا إلى البريد الإلكتروني المطلوب

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;

            if (email === validEmail) {
                window.location.href = "admin.html"; // توجيه إلى صفحة الإدارة
            } else {
                alert("Invalid email. Please try again.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Registration successful!"); // يمكنك إضافة منطق تسجيل حقيقي هنا
            window.location.href = "login.html"; // توجيه إلى صفحة تسجيل الدخول
        });
    }

    if (attendanceForm) {
        attendanceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const studentName = document.getElementById('studentName').value;
            const attendanceDate = document.getElementById('attendanceDate').value;
            const attendanceStatus = document.getElementById('attendanceStatus').value;

            const attendanceList = document.getElementById('attendanceList');
            const listItem = document.createElement('li');
            listItem.textContent = `${studentName} - ${attendanceDate} - ${attendanceStatus}`;
            attendanceList.appendChild(listItem);
        });
    }

    // إضافة منطق للإحصائيات في dashboard.html
    if (document.getElementById('totalManagers')) {
        document.getElementById('totalManagers').textContent = "5"; // مثال على عدد المديرين
        document.getElementById('totalClasses').textContent = "10"; // مثال على عدد الحصص
        document.getElementById('totalStudents').textContent = "50"; // مثال على عدد الطلاب
    }
});