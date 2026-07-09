# IntelliHMI – Role-Based Personalized AI-Powered Smart HMI System

An intelligent Human-Machine Interface (HMI) platform designed for industrial monitoring, real-time telemetry visualization, AI-assisted decision support, predictive maintenance, and secure role-based access control.

---

## Project Vision

IntelliHMI aims to modernize industrial monitoring by combining:

- Real-time machine telemetry
- AI-powered operational assistance
- Predictive maintenance
- Role-based dashboards
- Secure enterprise-grade access control

The platform provides personalized experiences for operators, supervisors, maintenance engineers, administrators, developers, testers, and other industrial roles.

---

## Features

### Authentication & Security

- JWT Authentication
- Refresh Tokens
- Role-Based Access Control (RBAC)
- Protected Routes
- Session Management
- Audit Logging

### Smart Dashboard

- Personalized dashboards
- Role-specific widgets
- Live telemetry cards
- Machine status monitoring
- Interactive analytics

### Telemetry Monitoring

- Temperature
- Pressure
- Voltage
- Current
- Flow Rate
- Humidity

### Alarm Management

- Automatic alarm detection
- Alarm acknowledgement
- Alarm history
- Critical alert tracking

### AI Assistant

- Equipment troubleshooting
- AI-powered recommendations
- Predictive maintenance
- Operational guidance

### User & Role Management

- User administration
- Permission management
- Activity tracking
- Role assignment

### Analytics

- Historical trends
- Machine utilization
- Downtime analysis
- Exportable reports

---

# Architecture

```
Frontend
        │
        ▼
React + TypeScript + Tailwind

        │
        ▼

NestJS Backend

        │
        ▼

Prisma ORM

        │
        ▼

PostgreSQL Database

        │
        ▼

Telemetry + AI + Analytics
```

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router

### Backend

- NestJS
- Prisma ORM
- PostgreSQL

### Authentication

- JWT
- RBAC

### AI

- Claude API

### Deployment

- Docker
- Docker Compose
- Nginx

---

## Current Development Status

### ✅ Completed

- React + TypeScript setup
- Tailwind CSS
- Professional Layout
- Role-Based Sidebar
- Dynamic Navbar
- Dynamic Dashboard
- Widget Registry
- RBAC Foundation

### 🚧 In Progress

- Authentication
- Protected Routes

### 📅 Planned

- Live Telemetry
- WebSocket Integration
- AI Assistant
- Analytics
- Predictive Maintenance
- Reports
- Docker Deployment

---

## Getting Started

```bash
git clone https://github.com/yaswanth-ram-sanapthi/IntelliHMI.git

cd IntelliHMI/frontend

npm install

npm run dev
```

---

## Project Roadmap

- [x] Phase 1 – UI Skeleton
- [x] Phase 2 – RBAC Frontend Foundation
- [ ] Phase 3 – Authentication
- [ ] Phase 4 – Backend Integration
- [ ] Phase 5 – Live Telemetry
- [ ] Phase 6 – AI Assistant
- [ ] Phase 7 – Predictive Maintenance
- [ ] Phase 8 – Production Deployment

---

## License

This project is developed for educational, research, and industrial innovation purposes.
