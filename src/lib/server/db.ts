import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

export function exclude<Record, Column extends keyof Record>(
    record: Record,
    columns: Column[],
): Omit<Record, Column> {
    return Object.fromEntries(
        Object.entries(record).filter(([column]) => !columns.includes(column)),
    );
}
