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