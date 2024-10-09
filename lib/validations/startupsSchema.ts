import * as z from 'zod'

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]

export const capTableSchema = z.object({
    name: z.string().min(1),
    document: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})

export const pitchDeckSchema = z.object({
    name: z.string().min(1),
    document: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})

export const taxReturnsSchema = z.object({
    name: z.string().min(1),
    document: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})

export const financialStatementsSchema = z.object({
    name: z.string().min(1),
    document: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})

export const legalDocumentsSchema = z.object({
    name: z.string().min(1),
    document: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})