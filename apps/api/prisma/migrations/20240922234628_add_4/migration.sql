/*
  Warnings:

  - You are about to drop the column `categoryId` on the `event` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_categoryId_fkey`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `categoryId`;
