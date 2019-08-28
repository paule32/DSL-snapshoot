var bmodal;
class _Ztest_prg {
	constructor(bmodal) {
		var this.bmodal = bmodal;

		var this.f = new Form1();
		var this.a = new Form2();
		if (bmodal) {
			this.f.mdi = false;
			this.f.ReadModal();
		} else {
			this.f.mdi = true;
			this.f.Open();
		}
	}
	var Form1 = class Form1 extends Form {
	}

	var Form2 = class Form2 extends Form {
	}

}
const _test_prg = new _Ztest_prg(bmodal);
