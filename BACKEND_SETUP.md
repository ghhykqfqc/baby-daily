# BabyLog AI - Backend Integration Setup

This guide will help you set up the backend integration with Supabase database.

## Prerequisites

1. A Supabase account (free tier works)
2. Node.js installed
3. Project dependencies installed: `npm install`

## Setup Steps

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up/login and create a new project
3. Wait for the project to be ready (usually 1-2 minutes)

### 2. Configure Database Schema

Run the following SQL in Supabase SQL Editor:

```sql
-- User table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  security_q1 TEXT NOT NULL,
  security_q2 TEXT NOT NULL,
  security_q3 TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Baby table
CREATE TABLE babies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feedings table
CREATE TABLE feedings (
  id SERIAL PRIMARY KEY,
  baby_id UUID REFERENCES babies(id) ON DELETE CASCADE NOT NULL,
  type VARCHAR(50) NOT NULL,
  volume INTEGER NOT NULL,
  time TIME NOT NULL,
  timestamp BIGINT NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Diapers table
CREATE TABLE diapers (
  id SERIAL PRIMARY KEY,
  baby_id UUID REFERENCES babies(id) ON DELETE CASCADE NOT NULL,
  type VARCHAR(10) NOT NULL CHECK (type IN ('pee', 'poo', 'mixed')),
  sub VARCHAR(100) NOT NULL,
  time TIME NOT NULL,
  timestamp BIGINT NOT NULL,
  color VARCHAR(10),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sleeps table
CREATE TABLE sleeps (
  id SERIAL PRIMARY KEY,
  baby_id UUID REFERENCES babies(id) ON DELETE CASCADE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  duration VARCHAR(20) NOT NULL,
  timestamp BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Growth table
CREATE TABLE growth (
  id SERIAL PRIMARY KEY,
  baby_id UUID REFERENCES babies(id) ON DELETE CASCADE NOT NULL,
  weight DECIMAL(5,2) NOT NULL,
  height DECIMAL(5,2) NOT NULL,
  date DATE NOT NULL,
  timestamp BIGINT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_feedings_baby_id ON feedings(baby_id);
CREATE INDEX idx_diapers_baby_id ON diapers(baby_id);
CREATE INDEX idx_sleeps_baby_id ON sleeps(baby_id);
CREATE INDEX idx_growth_baby_id ON growth(baby_id);
CREATE INDEX idx_feedings_timestamp ON feedings(timestamp);
CREATE INDEX idx_diapers_timestamp ON diapers(timestamp);
CREATE INDEX idx_sleeps_timestamp ON sleeps(timestamp);
CREATE INDEX idx_growth_timestamp ON growth(timestamp);
```

### 3. Get Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings > API**
3. Copy:
   - **Project URL** (e.g., `https://xxxxxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxxxx...
```

**Important:** Never commit `.env.local` to version control!

### 5. Install Additional Dependencies

```bash
npm install @supabase/supabase-js bcryptjs
npm install --save-dev @types/bcryptjs
```

### 6. Start the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Testing the Integration

### 1. Register a New Account

1. Open the app in your browser
2. Click "Register Account"
3. Fill in:
   - Username
   - Password
   - Security question answers
4. Click "Register Account"

### 2. Create Baby Profile

After successful registration/login:
1. You'll see the "Create Baby Profile" screen
2. Enter:
   - Baby's name (e.g., "Leo")
   - Birth date
3. Click "Create Profile"

### 3. Test CRUD Operations

**Feeding Records:**
- Click the + button to add a feeding
- Select type (Formula/Breast Milk)
- Adjust volume slider
- Set time
- Add optional notes
- Click "Save Record"
- Test edit and delete buttons

**Diaper Records:**
- Navigate to Diaper tab
- Click + to add diaper record
- Select type (Pee/Poo/Mixed)
- Set consistency and color (for poo)
- Click "Save Record"

**Sleep Records:**
- Navigate to Sleep tab
- Click + to add sleep record
- Set start and end times
- Duration calculates automatically
- Click "Save Record"

**Growth Records:**
- Navigate to Growth tab
- Click + to add growth data
- Enter weight, height, and date
- Click "Save Record"

## API Endpoints

### Authentication
- `POST /api/auth` - Login, Register, Forgot Password
  - Body: `{ action: 'login' | 'register' | 'forgot-password', ...data }`

### Baby
- `GET /api/baby?userId=xxx` - Get all babies for user
- `GET /api/baby?babyId=xxx` - Get specific baby
- `POST /api/baby` - Create new baby
- `PUT /api/baby` - Update baby

### Feedings
- `GET /api/feedings?babyId=xxx` - Get all feedings
- `POST /api/feedings?babyId=xxx` - Create feeding
- `PUT /api/feedings` - Update feeding
- `DELETE /api/feedings?id=xxx` - Delete feeding

### Diapers
- `GET /api/diapers?babyId=xxx` - Get all diapers
- `POST /api/diapers?babyId=xxx` - Create diaper record
- `PUT /api/diapers` - Update diaper record
- `DELETE /api/diapers?id=xxx` - Delete diaper record

### Sleeps
- `GET /api/sleeps?babyId=xxx` - Get all sleeps
- `POST /api/sleeps?babyId=xxx` - Create sleep record
- `PUT /api/sleeps` - Update sleep record
- `DELETE /api/sleeps?id=xxx` - Delete sleep record

### Growth
- `GET /api/growth?babyId=xxx` - Get all growth records
- `POST /api/growth?babyId=xxx` - Create growth record
- `PUT /api/growth` - Update growth record
- `DELETE /api/growth?id=xxx` - Delete growth record

## Data Flow

1. **Login Flow:**
   - User enters credentials → Auth API validates → Token stored in localStorage → User state set → Babies fetched → Data loaded

2. **Data Fetching:**
   - On app mount, check for stored token
   - If valid, fetch user's babies
   - Fetch all records (feedings, diapers, sleeps, growth) in parallel

3. **Save Flow:**
   - User fills form → API saves to database → Data reloaded from database → UI updated

4. **Delete Flow:**
   - User confirms deletion → API deletes from database → Data reloaded → UI updated

## Troubleshooting

### "Missing babyId" Error
- Make sure you've created a baby profile after login
- Check that currentBaby state is set correctly

### "Invalid credentials" Error
- Verify username and password are correct
- Check Supabase logs for more details

### "Failed to load data" Error
- Check Supabase is running and accessible
- Verify NEXT_PUBLIC_SUPABASE_URL is correct
- Check browser console for detailed error messages

### Database Connection Issues
- Verify your Supabase project is active
- Check that Row Level Security (RLS) policies allow access
- Consider disabling RLS for development (enable for production)

## Security Notes

- Passwords are hashed using bcrypt with 10 salt rounds
- Tokens expire after 24 hours
- All data is scoped by baby_id for multi-tenancy
- CASCADE deletes ensure data integrity when baby is deleted
- For production, enable Row Level Security (RLS) policies

## Next Steps

1. **Enable Row Level Security (RLS):** Add policies to restrict data access to authenticated users
2. **Add Input Validation:** Validate all user inputs on the backend
3. **Add Rate Limiting:** Prevent abuse of API endpoints
4. **Add Error Logging:** Track errors for debugging
5. **Add Unit Tests:** Test API endpoints and business logic
6. **Deploy to Production:** Use a production-ready Supabase instance

## Support

For issues or questions:
1. Check Supabase logs in the dashboard
2. Check browser console for client-side errors
3. Review the database schema in Supabase SQL Editor
