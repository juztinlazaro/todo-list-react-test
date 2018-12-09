export default {
  tasks: [
    {
      id: 1,
      status: 'active',
      title: 'Implment the tas list',
      dueDate: 'Dec 10',
      description: 'Im so awesome',
      priority: 'High Priority',
      members: [
        {
          id: 1,
          name: 'Justin',
          avatar: '',
        },
      ],
      contacts: [
        {
          id: 1,
          name: 'Justin',
          position: 'Web developer',
          contactNumber: '(214), 55555-555',
          email: 'foo@bar.com',
        },
      ],
    },
    {
      id: 2,
      status: 'active',
      title: 'Implment the tas list 2nd',
      dueDate: 'Dec 20',
      description: 'Im so awesome',
      priority: 'Low Priority',
      members: [
        {
          id: 1,
          name: 'Justin',
          avatar: '',
        },
      ],
      contacts: [
        {
          id: 1,
          name: 'Justin',
          position: 'Web developer',
          contactNumber: '(214), 55555-555',
          email: 'foo@bar.com',
        },
      ],
    },
  ],
  loading: false,
  error: null,
  success: null,
};
