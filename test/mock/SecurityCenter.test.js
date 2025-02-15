import DoorPanel from "../../src/mock/DoorPanel";
import MockDoorPanel from "../../src/mock/mockDoorPanel";
import SecurityCenter from "../../src/mock/SecurityCenter";

describe('security center test', () => {
    /* 需求描述：
    编写SecurityCenter类的单元测试，单元测试switchOn方法，不依赖于DoorPanel的close的方法实现
    * */

    test('should verify door is closed', () => {
        const mockDoorPanel = new MockDoorPanel();
        const security = new SecurityCenter(mockDoorPanel);
        const result = security.switchOn();
        
        expect(mockDoorPanel.verifyMockDoorPanelCalled()).toBe(true);
    });
});