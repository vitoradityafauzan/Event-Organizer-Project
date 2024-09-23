-- CreateTable
CREATE TABLE `Promotion` (
    `idPromo` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `type` ENUM('referral', 'voucher') NOT NULL DEFAULT 'referral',
    `amount` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL DEFAULT 0,
    `isExpired` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idPromo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
-- CREATE TABLE `Ticket` (
--     `idTicket` INTEGER NOT NULL AUTO_INCREMENT,
--     `eventId` INTEGER NOT NULL,
--     `userId` INTEGER NOT NULL,
--     `priceTotal` INTEGER NOT NULL,
--     `promoId` INTEGER NOT NULL DEFAULT 0,
--     `promoAmount` INTEGER NOT NULL DEFAULT 0,
--     `total` INTEGER NOT NULL,
--     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--     `updatedAt` DATETIME(3) NOT NULL,

--     PRIMARY KEY (`idTicket`)
-- ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `History` (
    `idHistory` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `payAmount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idHistory`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
