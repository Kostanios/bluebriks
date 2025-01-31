// Mock Knex
const mockQueryBuilder = {
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    first: jest.fn(),
    insert: jest.fn(),
    update: jest.fn(),
    del: jest.fn(),
    returning: jest.fn(),
};

const pgknex = jest.fn(() => mockQueryBuilder);

export default pgknex;
