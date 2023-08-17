import { expect, test } from "vitest";
import { describe } from "vitest";
import { transpile } from "..";

describe("transpiler", () => {
	test("Type annotations should be removed", () => {
		let res = transpile("let integer: number = 123;", "index.ts");
		expect(res).toBe("let integer = 123;\n");
	});
	test("Type declarations should be removed", () => {
		let res = transpile("type Thing = {param: number}", "index.ts");
        expect(res).toBe("");
	});
});
