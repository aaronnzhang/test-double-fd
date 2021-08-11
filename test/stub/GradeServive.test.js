import GradeService from "../../src/stub/GradeService";
import GradeSystem from "../../src/stub/GradeSystem";
import MockGradeSystem from "../../src/stub/MockGradeSystem";

describe('grade service test', () => {
    /* 需求描述：
    编写GradeService类的单元测试，单元测试calculateAverageGrades方法
    * */

    test('should return 90 when grade is 80, 90 and 100', () => {
        const mockData = new MockGradeSystem();
        const mockService = new GradeService(mockData);
        const result = mockService.calculateAverageGrades('90');

        expect(result).toBe(95);
        expect(mockData.verifyGradesForBeCalled()).toBe(true);
    });
});