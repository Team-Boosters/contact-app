#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'mycontact-backend';
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
    console.error(`Project directory ${projectName} already exists.`);
    process.exit(1);
}

fs.mkdirSync(projectPath);
fs.cpSync(path.join(__dirname, 'template'), projectPath, { recursive: true });

console.log(`Project ${projectName} created successfully.`);
console.log('Installing dependencies...');

execSync('npm install', { stdio: 'inherit', cwd: projectPath });

console.log('Dependencies installed.');
console.log('Project setup complete.');
console.log(`Navigate to the project directory: cd ${projectName}`);
console.log('Start the server: npm start');