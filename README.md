# BookStore Application

## Table of Contents
* [BookStore Application](#bookstore-application)
  * [Table of Contents](#table-of-contents)
  * [Project Overview](#project-overview)
  * [Technologies Used](#technologies-used)
  * [Project Limitations](#project-limitations)
    * [Future Implementation Requirements](#future-implementation-requirements)
  * [Project Structure](#project-structure)
    * [Main Files](#main-files)
  * [Database Implementation](#database-implementation)
    * [Database Schema](#database-schema)
    * [How to Run the Project Locally](#how-to-run-the-project-locally)
    * [Database Migrations](#database-migrations)
      * [Working with Migrations](#working-with-migrations)
  * [Project Requirements](#project-requirements)
    * [Runtime Environment](#runtime-environment)
    * [Package Dependencies](#package-dependencies)
    * [System Requirements](#system-requirements)

## Project Overview

This project is a book e-commerce application built as a student assignment. It features a storefront where users can browse books and complete a checkout process.

- **Student name**: Ivo Georgiev
- **Faculty number**: 223010020
- **University**: VFU Chernorizets Hrabar
- **Subject**: Electronic business

## Technologies Used

- **Frontend**:
    - Next.js 15.3.2
    - React 19.0.0
    - TypeScript
    - TailwindCSS

- **Backend**:
    - SQLite database
    - NodeJS
    - Prisma ORM 6.8.2
    - Prisma Client 6.8.2

- **Development Tools**:
    - ESLint
    - TypeScript
    - npm package manager

## Project Limitations

**Important Note:** This is a student project created for educational purposes and does not implement all features of a fully functional e-commerce system.

### Future Implementation Requirements

For a complete production-ready e-commerce solution, the following components would need to be implemented:

1. **Admin UI**
    - Content management system for books, authors, and categories
    - Order management dashboard
    - Customer management interface
    - Analytics and reporting tools

2. **Backend API**
    - RESTful or GraphQL API endpoints for all e-commerce operations
    - Authentication and authorization services
    - Data validation and business logic layers
    - Integration with external services

3. **Storefront-API Integration**
    - Complete connection between the frontend storefront and backend services
    - Real-time inventory management
    - User account management and persistence

4. **Payment Processing**
    - Integration with payment gateways (Stripe, PayPal, etc.)
    - Secure checkout flow
    - Order fulfillment processes
    - Invoicing and receipts

This project serves as a foundation that demonstrates the core concepts and could be extended to include these features in a professional implementation.

## Project Structure

### Main Files

- `/storefront/app/page.tsx` - Home page component with UI for browsing books and other sections
- `/storefront/app/checkout/page.tsx` - Checkout page component with order processing UI
- `/storefront/app/layout.tsx` - Main layout component for the application UI
- `prisma/schema.prisma` - Database schema definition
- `prisma/migrations/` - Database migration files

## Database Implementation

### Database Schema

The project uses Prisma ORM for database operations. Database migrations have been fully implemented and are ready to use. The schema includes models for:

- Books
- Book Authors
- Orders
- FAQs
- Testimonials

### How to Run the Project Locally

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd [project-directory]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Seed the database with initial data**
   ```bash
   npm run seed
   ```

6. **Start the development server**
   ```bash
   cd storefront
   npm run dev
   ```

7. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

### Database Migrations

The project uses Prisma Migrate for database schema management. All migrations are stored in the `prisma/migrations/` directory.

#### Working with Migrations

- **Apply existing migrations to your database**
  ```bash
  npx prisma migrate dev
  ```

- **Create a new migration after schema changes**
  ```bash
  npx prisma migrate dev --name [migration-name]
  ```

- **View the current database schema**
  ```bash
  npx prisma studio
  ```

- **Reset the database (caution: deletes all data)**
  ```bash
  npx prisma migrate reset
  ```

## Project Requirements

### Runtime Environment
- **Node.js**: v20.0.0 or higher
- **npm**: v10.0.0 or higher

### Package Dependencies
- **Core**:
    - next: 15.3.2
    - react: 19.0.0
    - react-dom: 19.0.0
    - typescript: 5.3.3

- **Database**:
    - @prisma/client: 6.8.2
    - prisma: 6.8.2

- **Styling**:
    - tailwindcss: 3.4.1
    - @tailwindcss/postcss: 3.0.1

- **Development**:
    - @types/node: 20.10.0
    - @types/react: 18.2.45
    - @types/react-dom: 18.2.18
    - eslint: 8.56.0
    - eslint-config-next: 15.3.2
    - @eslint/eslintrc: 2.1.4

### System Requirements
- Minimum 2GB RAM
- 1GB available disk space
- Internet connection for npm package installation
