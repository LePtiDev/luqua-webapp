include .env
export

gen-types:
	pnpm exec supabase gen types typescript --project-id ${PROJECT_REF} --schema public > ./src/types/supabase.ts