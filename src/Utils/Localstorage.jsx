const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Complete Project Report",
        "description": "Prepare and submit the final project report.",
        "date": "2025-04-01",
        "category": "Documentation",
        "active": true,
        "completed": false,
        "new_task": true,
        "failed": false
      },
      {
        "title": "Fix UI Bugs",
        "description": "Resolve UI issues in the dashboard.",
        "date": "2025-04-02",
        "category": "Development",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "new_task": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Rajesh",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Database Schema",
        "description": "Modify the database schema as per new requirements.",
        "date": "2025-04-03",
        "category": "Database",
        "active": true,
        "completed": false,
        "new_task": true,
        "failed": false
      },
      {
        "title": "Write Test Cases",
        "description": "Add test cases for backend APIs.",
        "date": "2025-04-04",
        "category": "Testing",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "new_task": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Suresh",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create a modern landing page design.",
        "date": "2025-04-05",
        "category": "Design",
        "active": false,
        "completed": true,
        "new_task": false,
        "failed": false
      },
      {
        "title": "Optimize Website Speed",
        "description": "Improve page load time for better performance.",
        "date": "2025-04-06",
        "category": "Performance",
        "active": true,
        "completed": false,
        "new_task": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "new_task": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Vikram",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create API Documentation",
        "description": "Write documentation for all APIs.",
        "date": "2025-04-07",
        "category": "Documentation",
        "active": true,
        "completed": false,
        "new_task": true,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review the latest commits and suggest improvements.",
        "date": "2025-04-08",
        "category": "Code Review",
        "active": true,
        "completed": false,
        "new_task": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "new_task": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Manoj",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Conduct a security audit for the application.",
        "date": "2025-04-09",
        "category": "Security",
        "active": true,
        "completed": false,
        "new_task": true,
        "failed": false
      },
      {
        "title": "Deploy Latest Build",
        "description": "Deploy the latest stable build to production.",
        "date": "2025-04-10",
        "category": "Deployment",
        "active": false,
        "completed": true,
        "new_task": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "new_task": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Ramesh",
    "email": "ad@e.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};
