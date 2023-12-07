class MyClass {
  submit() {
    alert(this.name + " form submitted");
  }
  cancel() {
    alert(this.name + " form cancelled");
  }
  fillname(name) {
    this.name = name;
  }
}

const c = new MyClass();
c.fillname("Carry");

const d = new MyClass();
d.fillname("Don");

c.submit();
d.submit();

d.cancel();
