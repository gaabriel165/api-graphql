import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const getUsers = async () => {
    const db = getRepository(User);

    return await db
    .createQueryBuilder("user")
    .getMany();
}

export const newUser = async (user: any) => {
    const db = getRepository(User);
    return db.save(user);
}

export const updateUserById = async (id: number, name: string, type: string) => {
    const db = getRepository(User);

    return await db
    .createQueryBuilder("user")
    .update(User)
    .set({ name: name, type: type })
    .where("id = :id", { id })
    .execute();
}

export const deleteUserById = async (id: number) => {
    const db = getRepository(User);

    return await db
    .createQueryBuilder("user")
    .delete()
    .from(User)
    .where("id = :id", { id })
    .execute();
}