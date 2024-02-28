CREATE TABLE `debt` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`amount` real NOT NULL
);
--> statement-breakpoint
CREATE TABLE `installment` (
	`id` text PRIMARY KEY NOT NULL,
	`debtId` text NOT NULL,
	`amount` real NOT NULL,
	`isPaid` integer DEFAULT false NOT NULL,
	`date` integer NOT NULL,
	`paidDate` integer,
	FOREIGN KEY (`debtId`) REFERENCES `debt`(`id`) ON UPDATE no action ON DELETE cascade
);
