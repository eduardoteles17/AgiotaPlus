CREATE TABLE `debt` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`amount` numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE `installment` (
	`id` text PRIMARY KEY NOT NULL,
	`debtId` text NOT NULL,
	`amount` numeric NOT NULL,
	`isPaid` integer DEFAULT 0 NOT NULL,
	`date` text NOT NULL,
	`paidDate` text,
	FOREIGN KEY (`debtId`) REFERENCES `debt`(`id`) ON UPDATE no action ON DELETE cascade
);
