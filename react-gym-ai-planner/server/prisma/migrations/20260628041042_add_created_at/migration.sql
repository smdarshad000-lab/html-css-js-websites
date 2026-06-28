-- AlterTable
ALTER TABLE "public"."training_plans" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;
