-- Supabase Initial Schema for Erynfall Website

-- 1. News Articles Table
CREATE TABLE erynfall_news (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  category text NOT NULL, -- e.g. Update, Dev Blog, Announcement
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Game Status Table (Current server health / outages)
CREATE TABLE erynfall_game_status (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  status_type text NOT NULL, -- e.g. Online, Maintenance, Offline
  message text,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert dummy status
INSERT INTO erynfall_game_status (status_type, message) VALUES ('Online', 'All systems operational. No reported outages.');

-- 3. Hiscores Table (Tracks player stats)
CREATE TABLE erynfall_hiscores (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name text NOT NULL UNIQUE,
  skill_overall_level integer NOT NULL DEFAULT 1,
  skill_overall_xp bigint NOT NULL DEFAULT 0,
  last_updated timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert dummy hiscores
INSERT INTO erynfall_hiscores (player_name, skill_overall_level, skill_overall_xp) VALUES 
('Zezima', 2277, 200000000),
('Woox', 2277, 195000000),
('B0aty', 2145, 120000000),
('Lynx Titan', 2277, 4600000000);

-- Insert dummy news
INSERT INTO erynfall_news (title, slug, category, content, created_at) VALUES 
('Sprint 3: Inventory & Loot System', 'sprint-3-inventory-loot', 'Update', 'Implementations now include a comprehensive 28-slot inventory, equipment loadouts, and drag-and-drop support, alongside authentic ground item generation through realistic drop tables.', now() - interval '1 day'),
('Sprint 2: NPC Combat AI & Animation', 'sprint-2-npc-combat', 'Dev Blog', 'NPCs now support dynamic positioning, approach-and-act behavior, and authentic robust combat stats. We''ve also integrated the core combat style XP system and walk + 3-tick item pickup animations.', now() - interval '10 days'),
('Sprint 1.5: Core Architecture & Database', 'sprint-1-5-database', 'Announcement', 'The canonical 14-table SQL schema is successfully deployed with HikariCP connection pooling, ensuring robust data persistence directly tied to our high-performance 256-tick Netty architecture.', now() - interval '30 days');
