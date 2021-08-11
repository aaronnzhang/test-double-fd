import GradeSystem from "./GradeSystem";

class MockGradeSystem extends GradeSystem {
  constructor() {
    super();
    this.wasCalled = false;
  }
  
  gradesFor() {
    this.wasCalled = true;
    return [90.0, 95.0, 100.0];
  }

  verifyGradesForBeCalled() {
    return this.wasCalled;
  }
}

export default MockGradeSystem;