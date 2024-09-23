/*
  Warnings:

  - You are about to drop the column `amount` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `event` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `event` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `event` DROP COLUMN `amount`,
    DROP COLUMN `endDate`,
    DROP COLUMN `isActive`,
    DROP COLUMN `slug`,
    DROP COLUMN `startDate`,
    MODIFY `price` DOUBLE NOT NULL DEFAULT 0.0;
