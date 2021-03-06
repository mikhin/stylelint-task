import getRandomNumber from 'app/helpers/get-random-number';

import blueSquare from 'app/assets/blue-square.png';
import greenSquare from 'app/assets/green-square.png';
import orangeSquare from 'app/assets/orange-square.png';
import redSquare from 'app/assets/red-square.png';

const courseImages = [
    blueSquare,
    greenSquare,
    orangeSquare,
    redSquare
];

const minCourseImageIndex = 0;
const maxCourseImageIndex = courseImages.length - 1;

const courses = [
    {
        title: '.NET Framework',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: '.NET Core, .NET Infrastructure, Design Patterns in .NET, Programming, Universal Windows Platform',
        url: 'https://yandex.ru/',
        category: 'Временное',
    },
    {
        title: 'Adobe Acrobat',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Accessibility, File Management, Forms, PDF Management, Printing',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Adobe Animate',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animation, Drawing, File Formats, General Usage, Programming',
        url: 'https://yandex.ru/',
        category: 'Всякое',
    },
    {
        title: 'Adobe Illustrator',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Drawing, Formatting Objects, Interface, Reshaping Objects, Workflow',
        url: 'https://yandex.ru/',
        category: 'Стандартное',
    },
    {
        title: 'Adobe InDesign',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Colors and Effects, Documents, Interactive, Objects and Graphics and Images, Text',
        url: 'https://yandex.ru/',
        category: 'Временное',
    },
    {
        title: 'Adobe Lightroom',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'File Handling, Image Adjustments, Tools, Exporting, Panels',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Adobe Photoshop',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Image Adjustments, Layers and Smart Objects, Panels, Selections, Tools',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Adobe Premiere Pro',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Media, Project Setup, Audio, Timeline, Graphics',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Adobe XD',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animation, Integration, Interactivity, UX Design, XD Interface',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'After Effects',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: '3D, Effects, Export, Keyframes, Project and Composition Settings',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Agile Methodologies',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Agile Ceremonies, Agile Mindset and Culture, Frameworks and Scaling, Product Owner, Team Facilitator',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Amazon Web Services (AWS)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Compute, Databases, Networking, Security, Storage',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Android',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Activities, Build Process, Fundamentals, Resources, User Interface',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Angular',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Angular CLI, Components and Directives, Dependency Injection, Routing, Template Syntax',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'ArcGIS Products',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Geodatabases, Geoprocessing, Geospatial Data, Map Layout, User Interface',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'AutoCAD',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Annotation, Design Reuse, Drafting, Interface, Output',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Autodesk Fusion 360',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Assembly, Interface, Modeling, Simulation, Workspaces',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Autodesk Inventor',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Assembly, Assembly Design, Drawing, Modeling, Sketching',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Autodesk Maya',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animation, Camera, General, Materials, Modeling',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Avid Media Composer',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Audio, Graphics, Media Management, Timeline, Transitions',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'AWS Lambda',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'AWS General, Configuration, Execution, Runtimes, Testing',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Bash',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Operators, Scripting, Expansion, Environment, Constructs',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'C (Programming Language)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'C Data Types and Data, Decision Structures, Functions, Loops, Memory Management and Storage',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'C#',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Assemblies and Extensions, Communication, Fundamentals, Networking, Objects and Types',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'C++',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Compiler and Preprocessor, Object-Oriented Programming, Pointers and Data Structures, Standard Library, Syntax and Semantics',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Cascading Style Sheets (CSS)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'CSS Properties, CSS Selectors, Layout, Syntax and Semantics, Typography',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Django',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Architecture, Configuration and Infrastructure, Models and Databases, Templates, URL Routing and Requests',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Dreamweaver',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'CSS, Coding, HTML, Keyboard Shortcuts, Links',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Eclipse',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Debugging, Eclipse Interface, Java in Eclipse, Source Control, Workflow Optimization',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Final Cut Pro',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Color, Editing, Organizing, Titles and Graphics, Trimming and Fine-Tuning',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Google Ads',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Bidding, Functionality, Optimizing, Setup, Terminology',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Google Analytics',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Analysis, Configuration, Functionality, Interface, Reports',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Google Cloud Platform (GCP)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Compute, Data, Security, Services, Setup',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Hadoop',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Hadoop Common, Hadoop Components, Hadoop Concepts, MapReduce, Using Hadoop',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'HTML',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Basic Structure, Forms, Global Attributes, Multimedia, Semantics',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'iMovie',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Editing, Audio, Media, Adjustment Settings, Titles',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Java',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Core APIs, Java Classes and Instances, Java Data Structures, Java Fundamentals, Java System Fundamentals',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'jQuery',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'AJAX, Animation, Events, Install and Deploy, Selecting and Traversing',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'JSON',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Comparison, Data Types, Limitations and Usage, Queries, Syntax Rules',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Keynote',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animating, Charts, Media, Setup, Text',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Kotlin',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Basics, Classes and Objects, Collections, Control Flow, Functions',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Linux',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Access Control, Command Line, Disk Systems, Networking, System Configuration',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Logic Pro',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Drummer Tracks and Drum Machine Designer, Mixing, Tools, Track Types, User Interface',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Machine Learning',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Algorithms, Data, General, Models, Types',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'MATLAB',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Functions, Language Fundamentals, Loops and Vectorization, Mathematics, Plotting',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Maven',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Build Customization, Dependencies, Maven Command Line, Plugins, Project Definition',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Access',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Queries, Database Design, Forms, Reports, Tables',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Azure',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Azure Data Platform, Container Solutions, DevOps in Azure, Identity and Access, Modern Applications',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Excel',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Charts, Formatting, Formulas and Functions, User Interface, Working with Data',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Outlook',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Calendar, Customize, Email, General, People',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Power Automate',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Building from Scratch, Building from Templates, Fundamentals, Power Automate Admin, Types of Initialization',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Power BI',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Admin, Concepts, Model, Visualize, Work with Data',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft PowerPoint',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animation and Transitions, Exporting, Media, Presenting, Setup',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Project',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Project Setup, Resources, Scheduling, Working with Multiple Projects, Working with Tasks',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Microsoft Word',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Charts and Tables, Layout, Media, Setup, Text',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'MySQL',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Database Management, RDBMS Basics, SQL Statement Syntax, Stored Procedures, Triggers',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Node.js',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Console, Events, HTTP, Modules, Packages',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'NoSQL',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Core NoSQL, NoSQL Applications, NoSQL Concepts, Optimizing NoSQL﻿, Using NoSQL',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Object-Oriented Programming (OOP)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Constructors and Destructors, Design Patterns, Four Principles of OOP, Object-Oriented Fundamentals, Software Development',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Objective-C',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Classes, Collections, Functions, General, Variables',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'PHP',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Arrays, Classes, Language Basics, Syntax, Utility Functions',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Pro Tools',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Recording, Editing, File Management, Navigating, Mixing',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Python (Programming Language)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Advanced Concepts, Data Structures, Fundamentals, Object-Oriented Programming, Sorting',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'QuickBooks',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Money In: Collect Cash, Money In: Create Invoices, Navigating QuickBooks Desktop 2019, Payroll: Setting Up Employees, Setting Up Chart of Accounts',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'R (Programming Language)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Data Structures, Data Management, Functions, Operators, Statistics',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'React.js',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Basics, Components, ESNext Syntax, Hooks, Tools',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'REST APIs',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'API Security, Consuming APIs, Designing APIs, Implementing APIs, Measuring APIs',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Revit',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Colors and Effects, Documents, Interactive, Objects/Graphics/Images, Text',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Rhino 3D',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Analysis, Editing, General Knowledge, Interface, Modeling',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Ruby on Rails',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'ActiveRecord, Architecture, Controllers, Routes, Views',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Scala',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Control Flow, Data Structures, Data Types, Functional Programming, Object-Oriented Programming',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Search Engine Optimization (SEO)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'On-Page, Ranking, Technical, Terminology, Tools',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'SharePoint',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Administration, Libraries, Lists, SharePoint Features, SharePoint Permissions',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'SketchUp',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Drawing, Tools, Interface, Groups and Components, LayOut',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'SOLIDWORKS',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Assemblies, Drawings, Part Modeling, Sketching, User Interface and Basic Concepts',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Spring Framework',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'AOP, Boot, Core, Data, Web',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Swift (Programming Language)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Classes and Structs, Closures and Functions, Control Flow, General, Types',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Transact-SQL (T-SQL)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Data Types, Functions, SQL Syntax, Terminology, Writing Queries',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Unity',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Animation, Asset Management, C# Scripting, Gameplay, Programming',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Visio',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Creating Business Process Diagrams, Creating Diagrams, Creating Organization Charts, Managing Text and Shapes and Pages, Visio Workspace',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Visual Basic for Applications (VBA)',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Declarations, Procedures and Calls, Syntax, User-Defined Elements, VBE',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'Windows Server',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Active Directory, Configure Network Services and Access, Deploy/Manage/Maintain Servers, Install and Configure Server Roles and Features, Install and Configure Windows Server',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'WordPress',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'Core, Development, Performance & Accessibility, Plugins, Themes',
        url: 'https://yandex.ru/',
        category: 'Разное',
    },
    {
        title: 'XML',
        image: courseImages[getRandomNumber(minCourseImageIndex, maxCourseImageIndex)],
        description: 'DTD and DOCTYPE, Markup Language Intro, Stylesheets with CSS and XSLT, XML Schema, XML Syntax and Specifications',
        url: 'https://yandex.ru/',
        category: 'Разное',
    }
]

export default courses;
