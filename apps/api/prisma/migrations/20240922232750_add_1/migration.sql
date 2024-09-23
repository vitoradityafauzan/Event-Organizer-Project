/*
  Warnings:

  - You are about to drop the column `desc` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `event` table. All the data in the column will be lost.
  - You are about to drop the `location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `availableSeats` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPaidEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellEndDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellEndTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `event` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `Event_locationId_fkey`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `desc`,
    DROP COLUMN `locationId`,
    ADD COLUMN `availableSeats` INTEGER NOT NULL,
    ADD COLUMN `description` LONGTEXT NOT NULL,
    ADD COLUMN `eventDate` DATETIME(3) NOT NULL,
    ADD COLUMN `eventTime` DATETIME(3) NOT NULL,
    ADD COLUMN `isPaidEvent` ENUM('Free', 'Paid') NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `sellEndDate` DATETIME(3) NOT NULL,
    ADD COLUMN `sellEndTime` DATETIME(3) NOT NULL,
    MODIFY `image` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `location`;
