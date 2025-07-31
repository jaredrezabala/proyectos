module.exports = {
  apps: [
    {
      name: 'hub',
      script: './index.js',
    },
    {
      name: 'todo-backend',
      script: './projects/to-do/server/index.js',
    },
    {
      name: 'todo-frontend',
      cwd: './projects/to-do/client',
      script: 'npm',
      args: 'run dev',
    }
  ]
}
