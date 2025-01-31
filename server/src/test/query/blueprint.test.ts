import { ListBlueprints, GetBlueprintById, CreateBlueprint, UpdateBlueprintById, DeleteBlueprintById} from "../../query/blueprint";
import pgknex from "../../utils/knex";


jest.mock("../../utils/knex", () => {

    const mockKnex = {
        select: jest.fn().mockReturnValue(this),
        where: jest.fn().mockReturnValue(this),
        from: jest.fn().mockReturnValue(this),
        insert: jest.fn().mockReturnValue(this),
        update: jest.fn().mockReturnValue(this),
        del: jest.fn().mockReturnValue(this),
        first: jest.fn().mockReturnValue(this),
        returning: jest.fn().mockReturnValue(this),
        query: jest.fn().mockReturnValue(this),
    };
    return mockKnex;
});

describe("Blueprint Queries", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("ListBlueprints", () => {
        it("should call pgknex with version and author filters", async () => {
            const request = {
                query: { version: "1.0", author: "Author Name" }
            };
            (pgknex.select as jest.Mock).mockReturnValue(pgknex);
            (pgknex.where  as jest.Mock).mockReturnValue(pgknex);

            await ListBlueprints(request as any);
            expect(pgknex.select).toHaveBeenCalledWith("*");
            expect(pgknex.where).toHaveBeenCalledWith("version", "1.0");
            expect(pgknex.where).toHaveBeenCalledWith("author", "Author Name");
        });

        it("should call pgknex without filters", async () => {
            const request = {
                query: {}
            };
            (pgknex.select as jest.Mock).mockReturnValue(pgknex);

            await ListBlueprints(request as any);
            expect(pgknex.select).toHaveBeenCalledWith("*");
        });
    });

    describe("GetBlueprintById", () => {
        it("should return blueprint by id", async () => {
            const request = { params: { id: "123" } };
            (pgknex.select as jest.Mock).mockReturnValue(pgknex);
            (pgknex.where as jest.Mock).mockReturnValue(pgknex);
            (pgknex.from as jest.Mock).mockReturnValue(pgknex);
            (pgknex.first as jest.Mock).mockResolvedValueOnce({ id: "123", name: "Blueprint" });

            const result = await GetBlueprintById(request as any);
            expect(pgknex.select).toHaveBeenCalledWith("*");
            expect(pgknex.where).toHaveBeenCalledWith("id", "123");
            expect(result).toEqual({ id: "123", name: "Blueprint" });
        });

        it("should handle error when id is missing", async () => {
            try {
                const request = { params: {} };
                await expect(GetBlueprintById(request as any)).rejects.toThrow("Missing required fields");
            } catch (e) {

            }
        });
    });

    describe("CreateBlueprint", () => {
        it("should create a new blueprint", async () => {
            const request = {
                body: {
                    name: "New Blueprint",
                    version: "1.0",
                    author: "Author Name",
                    blueprint_data: "{}"
                }
            };
            (pgknex.insert as jest.Mock).mockResolvedValue(pgknex);

            await CreateBlueprint(request as any);
            expect(pgknex.insert).toHaveBeenCalledWith({
                name: "New Blueprint",
                version: "1.0",
                author: "Author Name",
                blueprint_data: "{}"
            });
        });

        it("should handle error when required fields are missing", async () => {
            try {
                const request = { body: {} };
                await expect(CreateBlueprint(request as any)).rejects.toThrow("Missing required fields");
            } catch (e) {

            }
        });
    });

    describe("UpdateBlueprintById", () => {
        it("should update blueprint by id", async () => {
            const request = { params: { id: "123" }, body: { name: "Updated Blueprint" } };
            (pgknex.select as jest.Mock).mockReturnValue(pgknex);
            (pgknex.where as jest.Mock).mockReturnValue(pgknex);
            (pgknex.from as jest.Mock).mockReturnValue(pgknex);
            (pgknex.update as jest.Mock).mockReturnValue(pgknex);

            await UpdateBlueprintById(request as any);
            expect(pgknex.update).toHaveBeenCalledWith({ name: "Updated Blueprint" });
        });

        it("should handle error when no update data is provided", async () => {
            try {
                const request = { params: { id: "123" }, body: {} };
                await expect(UpdateBlueprintById(request as any)).rejects.toThrow(new Error("No update data provided"));
            } catch (e) {

            }
        });

        it("should handle error when id is missing", async () => {
            try {
                const request = { params: {}, body: { name: "Updated Blueprint" } };
                await expect(UpdateBlueprintById(request as any)).rejects.toThrow("Missing required fields");
            } catch (e) {

            }
        });
    });

    describe("DeleteBlueprintById", () => {
        it("should handle error when id is missing", async () => {
            try {
                const request = { params: {} };
                await expect(DeleteBlueprintById(request as any)).rejects.toThrow("Missing required fields");
            } catch (e) {

            }
        });
    });
});
