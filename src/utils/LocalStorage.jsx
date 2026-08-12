

const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "a@a.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-21",
        category: "Design",
        priority: "High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        taskDate: "2026-07-18",
        category: "Frontend",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate employee login API.",
        taskDate: "2026-07-19",
        category: "Backend",
        priority: "High"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "priya.singh@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-07-22",
        category: "Frontend",
        priority: "High"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-07-23",
        category: "UI",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Design",
        taskDescription: "Complete footer section.",
        taskDate: "2026-07-17",
        category: "Design",
        priority: "Low"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Module",
        taskDescription: "Implement payment page.",
        taskDate: "2026-07-16",
        category: "Backend",
        priority: "High"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "amit.kumar@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 3,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Create employee profile page.",
        taskDate: "2026-07-20",
        category: "Frontend",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB collections.",
        taskDate: "2026-07-15",
        category: "Database",
        priority: "High"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Add notification feature.",
        taskDate: "2026-07-24",
        category: "Backend",
        priority: "High"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "Implement email verification.",
        taskDate: "2026-07-14",
        category: "Backend",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix dashboard rendering issue.",
        taskDate: "2026-07-13",
        category: "Bug",
        priority: "Low"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "neha@n.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Design company landing page.",
        taskDate: "2026-07-25",
        category: "Design",
        priority: "High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Update",
        taskDescription: "Replace old logo with new branding.",
        taskDate: "2026-07-18",
        category: "Design",
        priority: "Low"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Optimization",
        taskDescription: "Optimize React components.",
        taskDate: "2026-07-26",
        category: "Performance",
        priority: "Medium"
      }
    ]
  },

  {
    id: 5,
    firstName: "Rohit",
    email: "rohit.gupta@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-07-27",
        category: "Security",
        priority: "High"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription: "Make website mobile friendly.",
        taskDate: "2026-07-20",
        category: "Frontend",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Search Feature",
        taskDescription: "Add search functionality.",
        taskDate: "2026-07-19",
        category: "Feature",
        priority: "High"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Settings Page",
        taskDescription: "Develop account settings page.",
        taskDate: "2026-07-28",
        category: "Frontend",
        priority: "Low"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    firstName: "Vikram",
    email: "admin@admin.com",
    password: "123"
  }
];

export { employees, admin };

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("Employees")) || [];
  const admin = JSON.parse(localStorage.getItem("Admin")) || [];

  return { employees, admin };
};