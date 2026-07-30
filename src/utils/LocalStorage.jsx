const employees = [
  {
    id: 1,
    email: "rahul.sharma@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-21",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        taskDate: "2026-07-18",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate employee login API.",
        taskDate: "2026-07-19",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "priya.singh@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Develop employee dashboard UI.",
        taskDate: "2026-07-22",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-07-23",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Footer Design",
        taskDescription: "Complete footer section.",
        taskDate: "2026-07-17",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Module",
        taskDescription: "Implement payment page.",
        taskDate: "2026-07-16",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    email: "amit.kumar@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Profile Page",
        taskDescription: "Create employee profile page.",
        taskDate: "2026-07-20",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB collections.",
        taskDate: "2026-07-15",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDescription: "Add notification feature.",
        taskDate: "2026-07-24",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Service",
        taskDescription: "Implement email verification.",
        taskDate: "2026-07-14",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fix",
        taskDescription: "Fix dashboard rendering issue.",
        taskDate: "2026-07-13",
        category: "Bug"
      }
    ]
  },

  {
    id: 4,
    email: "neha.verma@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Design company landing page.",
        taskDate: "2026-07-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Update",
        taskDescription: "Replace old logo with new branding.",
        taskDate: "2026-07-18",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Optimization",
        taskDescription: "Optimize React components.",
        taskDate: "2026-07-26",
        category: "Performance"
      }
    ]
  },

  {
    id: 5,
    email: "rohit.gupta@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-07-27",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed:true,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription: "Make website mobile friendly.",
        taskDate: "2026-07-20",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Search Feature",
        taskDescription: "Add search functionality.",
        taskDate: "2026-07-19",
        category: "Feature"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Settings Page",
        taskDescription: "Develop account settings page.",
        taskDate: "2026-07-28",
        category: "Frontend"
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export { employees, admin };

export const setLocalStorage=()=>{
  localStorage.setItem('Employees',JSON.stringify(employees))
  localStorage.setItem('Admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
  const data = localStorage.getItem("Employees")

  console.log(JSON.parse(data))
  
}