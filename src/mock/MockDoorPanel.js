import DoorPanel from "./DoorPanel";

class MockDoorPanel extends DoorPanel {
  constructor() {
    super();
    this.wasCalled = false;
  }

  close() {
    this.wasCalled = true;
    return "is closed";
  }

  verifyMockDoorPanelCalled() {
    return this.wasCalled;
  }
}

export default MockDoorPanel;
