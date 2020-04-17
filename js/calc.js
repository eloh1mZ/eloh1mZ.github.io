HTML =`
	<div class="row"><form name="calc__input" class="calc__item calc__input"><input type="text" readonly></form></div>
		<div class="row">
			<button class="calc__item top" onclick=" calc.clearTotal() ">C</button>
			<button class="calc__item top" onclick=" calc.changePositivity() "><sup>+</sup>/<sub>−</sub></button>
			<button class="calc__item top" onclick=" calc.getPercentage() ">%</button>
			<button class="calc__item right" onclick=" calc.divide() ">&divide;</button>
		</div>
		<div class="row">
			<button class="calc__item" onclick=" calc.print(7) ">7</button>
			<button class="calc__item" onclick=" calc.print(8) ">8</button>
			<button class="calc__item" onclick=" calc.print(9) ">9</button>
			<button class="calc__item right" onclick=" calc.multiply() ">&times;</button>
		</div>
		<div class="row">
			<button class="calc__item" onclick=" calc.print(4) ">4</button>
			<button class="calc__item" onclick=" calc.print(5) ">5</button>
			<button class="calc__item" onclick=" calc.print(6) ">6</button>
			<button class="calc__item right" onclick=" calc.subtract() ">-</button>
		</div>
		<div class="row">
			<button class="calc__item" onclick=" calc.print(1) ">1</button>
			<button class="calc__item" onclick=" calc.print(2) ">2</button>
			<button class="calc__item" onclick=" calc.print(2) ">3</button>
			<button class="calc__item right" onclick=" calc.add() ">+</button>
		</div>
		<div class="row">
			<button class="calc__item zero" onclick=" calc.print(0) ">0</button>
			<button class="calc__item" onclick=" calc.print('.') ">.</button>
			<button class="calc__item right" onclick=" calc.equal() ">=</button>
		</div>
`
Func = () => {return}

const calc = new App ("Calculator", "pictures/calc.svg", HTML, Func,"calc.exe")

function _resolveState(){
	switch(calc._state) {
		case "ADD":
			calc._total += parseFloat(calc.input.value);
			calc.input.value = 0;
			break;
		case "SUB":
			calc._total -= parseFloat(calc.input.value);
			calc.input.value = 0;
			break;
		case "MULT":
			calc._total *= parseFloat(calc.input.value);
			calc.input.value = 0;
			break;
		case "DIV":
			calc._total /= parseFloat(calc.input.value);
			calc.input.value = 0;
			break;

		default:
			calc._total = parseFloat(calc.input.value);
			calc.input.value = 0;
			break;
	}
}
calc._total = 0;
calc._state = null;
calc.add = function() {
	_resolveState();
	calc._state = "ADD";
}

calc.subtract = function() {
	_resolveState();
	calc._state = "SUB";
}

calc.multiply = function() {
	_resolveState();
	calc._state = "MULT";
}

calc.divide = function() {
	_resolveState();
	calc._state = "DIV";
}

calc.equal = function() {
	_resolveState();
	calc.input.value = calc._total;
	calc._state = "EQ";
}

calc.print = function(n) {
	if(calc.input.value == "0" || calc._state == "EQ"){
		calc.input.value = "";
	}
	if( calc._state == "EQ"){
		calc._state = null;
	}
	calc.input.value = calc.input.value + n;
}

calc.changePositivity = function() {
	calc.input.value = (parseFloat(calc.input.value) * -1).toString();
}

calc.getPercentage = function() {
	calc.input.value = (parseFloat(calc.input.value) * .01).toString();
}

calc.clearTotal = function() {
	calc.input.value = 0;	 
	calc._total = 0;
	calc._state = null;
}
