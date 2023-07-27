#!/bin/sh

npx wrangler pages dev --kv=IMAGES --kv=blog --live-reload -- npm run dev
