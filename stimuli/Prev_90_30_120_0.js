(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 630,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["Prev_90_30_120_0_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6Kopie = function() {
	this.spriteSheet = ss["Prev_90_30_120_0_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WhiteMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.4)").s().p("Eg8+AtsMAAAhbYMB59AAAMAAABbYg");
	this.shape.setTransform(390.4,260.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32,780.8,585);


(lib.no_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABsAAQAAAtgfAgQggAfgtAAQgsAAgfgfQggggAAgtQAAgsAggfQAfggAsAAQAtAAAgAgQAfAfAAAsg");
	this.shape.setTransform(10.9,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AhLBMQgggfAAgtQAAgsAggfQAfggAsAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_1.setTransform(10.9,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.7,23.7);


(lib.filling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,102,102,0.498)").s().p("A1YOAIAA7/MAqxAAAIAAb/g");
	this.shape.setTransform(544.8,63.5,0.931,1.222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,102,102,0.498)").s().p("Az6RHMAAAgiMMAn0AAAMAAAAiMg");
	this.shape_1.setTransform(127.5,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46,672.3,219.2);


(lib.effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.Bitmap6Kopie();
	this.instance.setTransform(0,0,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.tubedoublered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgbADIAAgFIA3gZIAAAJIgrASIArATIAAAIg");
	this.shape.setTransform(19.7,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgbADIAAgFIA3gZIAAAJIgrASIArATIAAAIg");
	this.shape_1.setTransform(11.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape_2.setTransform(2,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAIgIAJAAQALAAAGAGQAGAHAAALIAAADIgmAAQAAAFACAEIAEAGQACADAEABQACABAEAAQAFAAAGgCQAFgCADgDIAAAAIAAAKIgJAEQgFABgFAAQgMAAgHgHgAgJgPQgEAEgBAGIAeAAQgBgHgDgEQgEgEgHAAQgFAAgFAFg");
	this.shape_3.setTransform(-3,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgLAbIgJgEIAAgKIABAAQAEADAFACQAGACAEAAQAFAAADgCQADgCAAgEQAAgDgBgCIgIgDIgDgBIgFgBQgIgCgDgBQgDgEAAgFQAAgEACgDIAEgFIAHgEQAEgBADAAIAKABIAJADIAAAKIgBAAIgIgFIgKgBQgDAAgEACQgDACAAADQAAAEACABQACACAEABIAEABIAFABQAHACADABQAEAEAAAGQAAAHgGAFQgHAFgIAAQgGAAgFgBg");
	this.shape_4.setTransform(-8.5,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgPAVQgIgIAAgNQAAgMAHgHQAIgIAJAAQALAAAGAGQAGAHAAALIAAADIgmAAQAAAFACAEIAEAGQACADAEABQACABAEAAQAFAAAGgCQAFgCADgDIAAAAIAAAKIgJAEQgFABgFAAQgMAAgHgHgAgJgPQgEAEgBAGIAeAAQgBgHgDgEQgEgEgHAAQgFAAgFAFg");
	this.shape_5.setTransform(-14.2,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AARAkIgWgdIgOAAIAAAdIgKAAIAAhHIAUAAIAKABIAHADQAFACABAEQADAEAAAGQAAAIgEAFQgEADgHADIAcAggAgTAAIAJAAIAIAAQACgBADgCIADgFIABgGQAAgEgCgCIgDgEIgDgCIgHgBIgLAAg");
	this.shape_6.setTransform(-19.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9999").s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADpBaInRAAQgUAAgSgHQgRgHgNgNQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgMARgIQASgHAUABIHRAAQAUgBASAHQARAIANAMQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNANgRAHQgSAHgUAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#30AD3C").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,38).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#30AD3C").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.tubedoublegreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape.setTransform(10.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgPAbIAAg1IAJAAIAAAIQAFgEADgCQADgCAFAAIADAAIAEABIAAAJIgBAAIgEAAIgEgBQgFAAgDACIgGAFIAAAlg");
	this.shape_1.setTransform(6.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgRAXQgFgFAAgHQAAgGADgEQADgCAFgCIALgDIAOgBIAAgCQAAgDgCgCIgDgDIgEgCIgFAAIgHABIgJADIgBAAIAAgKIAIgBIAJgBIAJABQAEABADACQADACACAEQACADAAAGIAAAjIgJAAIAAgGIgEACIgEADIgFACIgFAAQgHAAgGgFgAAEAAIgHAAQgEABgDADQgCACAAAEQAAAFADACQACADAGAAQADAAAEgCIAIgFIAAgNIgKAAg");
	this.shape_2.setTransform(1.1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAeQgFgEAAgKIAAgbIgGAAIAAgIIAGAAIAAgPIAKAAIAAAPIARAAIAAAIIgRAAIAAAXIAAAHIAAAEIACADIAGABIAFAAIADgCIABAAIAAAIIgGABIgFABQgHAAgEgFg");
	this.shape_3.setTransform(-3.6,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAkIgOgFIAAgMIABAAQAFAFAIACQAHADAGAAQAIAAAFgEQAEgDAAgGQAAgEgCgDQgCgCgFgBIgIgCIgHgCQgKgCgEgDQgFgFAAgHQAAgKAHgFQAJgGAKAAQAHAAAGABIALAEIAAALIAAAAQgEgDgHgDQgHgCgGAAQgHAAgEADQgFAEAAAFQAAAEADADQABACAHACIAHABIAKACQAHACAEADQAEAEABAIQgBAEgCAEQgCAFgDACQgEAEgFABQgFACgGAAQgHAAgGgBg");
	this.shape_4.setTransform(-9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// center tube
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80DD88","#D7F4DC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A9E7AE","#EBFAEC"],[0,1],21,8.8,-0.8,-7.7).s().p("ADpBZInRAAQgUABgSgHQgRgIgNgMQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgNARgHQASgHAUAAIHRAAQAUAAASAHQARAHANANQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNAMgRAIQgSAGgUAAIAAAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#80DD88","#D7F4DC"],[0,1],-21,-8.8,0.8,7.7).s().p("ADpBaInRAAQgUAAgSgHQgRgHgNgNQgOgMgHgQQgHgRgBgSQABgRAHgRQAHgQAOgMQANgMARgIQASgHAUABIHRAAQAUgBASAHQARAIANAMQAOAMAHAQQAHARABARQgBASgHARQgHAQgOAMQgNANgRAHQgSAHgUAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// center tube border
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4BCD58").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#30AD3C").s().p("ADwBjInfAAQgVABgSgIQgSgIgOgOQgNgOgIgRQgHgTgBgUQABgTAHgTQAIgRANgOQAOgOASgIQASgIAVAAIHfAAQAVAAASAIQASAIAOAOQANAOAIARQAHATABATQgBAUgHATQgIARgNAOQgOAOgSAIQgSAHgVAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#3ECA4B","#BCEDC0"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#45CB52","#8CE195"],[0,1],-9.3,-13,19.8,13.5).s().p("AjwCMQgcAAgagMQgZgKgTgUQgTgTgLgZQgLgbABgbQgBgbALgaQALgZATgUQATgTAZgLQAagLAcAAIHhAAQAcAAAaALQAZALATATQATAUAKAZQALAaAAAbQABAbgMAbQgKAZgTATQgTAUgZAKQgaALgcABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},2).to({state:[]},1).wait(1));

	// outer tube
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3ECA4B","#3ECA4B"],[0,1],-39,0,39,0).s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#30AD3C").s().p("AkuCJQgagLgTgVQgUgUgLgcQgLgcABgdQgBgdALgcQALgbAUgVQATgUAagMQAbgMAcAAIHvAAQAcAAAaAMQAaAMAUAUQATAVALAbQALAcAAAdQABAdgMAcQgLAcgTAUQgUAVgaALQgaAMgcABInvAAIAAAAQgcAAgbgNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-15,78,30);


(lib.bio_hazard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBAQgWgLgJgQQgNgWAAgQQgBgcAYgYIATgLQAZgOAhANQAfALAHANQALATABAXQAAAnghAUQgWAMgVAAQgOAAgQgIgAgeg8IgTAKQgWATABAdQAAARAMAUQAJAPAWALQAgAPAjgUQAhgTgCglQAAgWgKgRQgIgNgdgJQgQgFgMAAQgOAAgMAGgAgPA+IgCgBIAAgCIABgBQAQgIADgPQACgLgDgHIgCgDIgDgCIAAgCIABgBQAKgOAPATQAGAIATABIASgKIABAAIABABQABABgDAEIgMAIQgNAIgKgBQgEAAgFgDIgDAIQgEAHgKAFIgJAHIgKAEgAguArQgDgGABgQQABgSAJgDIABAAIgGgGQgOgYAPgRIABABQABACgCAIQgBAIACACIAEAGIAGACIACADIAAABIALAEIAPACIgBAIIgDAJQgHAEgKgFIgCABIgEABQgJAFgCAOQgBAKADAHIgBACIgBAAQgCAAgDgFgAgRAZIgIgHQgDgFADgCQABgBAAAAQABAAAAAAQABAAAAABQABAAABABIAAACIAAACQACADAJACIAJADQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgFACQgFAAgGgFgAAXAMIACgGQACgGgBgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgBgEQAAgFADACIAEADQACAEAAAKQAAAKgGAEIgCABIgCgCgAAEgGIgEgEIAAgBIgBAAQAAAAAAgBQAAgBAAAAQAAAAAAAAQABAAAAAAIACgKQAFgNgFgJQgCgEgKgFIgMgGIAAgBQAHgCAJAFIAEABIAHADIAGAGIAEAGIADAFIAAADIANAAQAMgBADACIALAIIAEAHQAEAFgBADQgGgGgHgEQgOgIgOAJIgLARIgBABIgBAAIgGgFgAgZgPIgBgBQgDgFAPgIQAOgIABAFQAAABAAAAQABABgBAAQAAABAAAAQgBABAAAAIgDABQgDAAgGAEQgHADgBADIgCACIgCABIgBgBg");
	this.shape.setTransform(7.3,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgbA9QgWgLgJgPQgMgUAAgRQgBgdAWgTIATgKQAXgMAfALQAdAJAIANQAKARAAAWQACAlghATQgUAMgTAAQgNAAgPgHgAgCAJIgBABIAAACIADACIACADQADAHgCALQgDAPgQAIIgBABIAAACIACABIABAAIAKgEIAJgHQAKgFAEgHIADgIQAFADAEAAQAKABANgIIAMgIQADgEgBgBIgBgBIgBAAIgSAKQgTgBgGgIQgIgMgIAAQgGAAgDAHgAgrgGIAGAGIgBAAQgJADgBASQgBAQADAGQADAFADAAIABgCQgDgHABgKQACgOAJgFIAEgBIACgBQAKAFAHgEIADgJIABgIIgPgCIgLgEIAAgBIgCgDIgGgCIgEgGQgCgCABgIQACgIgBgCIgBgBQgPARAOAYgAgZALQgDACADAFIAIAHQAKAHAGgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIgJgDQgJgCgCgDIAAgCIAAgCQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgCABgAAYgPIABAEQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQABAHgCAGIgCAGQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAGgEAAgKQAAgKgCgEIgEgDIgCAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABgAgBgLIABAAIAAABIAEAEIAHAFIABgBIALgRQAOgJAOAIQAHAEAGAGQABgDgEgFIgEgHIgLgIQgDgCgMABIgNAAIAAgDIgDgFIgEgGIgGgGIgHgDIgEgBQgJgFgHACIAAABIAMAGQAKAFACAEQAFAJgFANIgCAKIgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAgAgOgdQgPAIADAFIABABIADAAIACgCQABgDAHgDQAGgEADAAIADgBQAAAAABgBQAAAAAAgBQABAAgBgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQgEAAgJAFg");
	this.shape_1.setTransform(7.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.2,15.2,14.6);


(lib.label = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bio_hazard();
	this.instance.setTransform(14.2,13.5,1,1,0,0,0,7.5,7.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgsBaQgVgigJgdQgZgqgMgRIgHgJIATAAQAVgHAzgbQAtgZAOgNIAAADQAdAgAYAvQAMAZAWAuQg+Agg5AcIgdAOIgPgYg");
	this.shape.setTransform(13.5,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcCBIgCAAQgDAAgEgDQAAABAAgCQgIgHgLgXIgYg0QgJgUgWggIgTgfQAAgOAIAGIAAgCIABgBQA1gOAsgXQAWgMAmgYIAAgBIABABIAFgEIABAEIgBAFQAPARAgA4QAqBEAAAQIAAAEIAAABQAAAOg+AjQhAAlgfAAIgCAAgAhsgfQAMASAZAqQAKAdAUAiIAQAYIAcgPQA5gbA+ggQgWgugMgZQgYgvgcggIAAgEQgPAOgsAYQg0AbgVAIIgSAAIAGAIg");
	this.shape_1.setTransform(13.1,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,25.9);


(lib.pipette = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.label();
	this.instance.setTransform(52.7,74.4,1.067,1.064,0,0,0,13.2,12.9);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(0,0,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,118.6);


(lib.pipette_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.label();
	this.instance_2.setTransform(33.9,55.9,1.067,1.064,0,0,0,13.2,12.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("ACLErIgxgYQgWgLgOgJQgKgLgIgMIgJgPIgDgIIgEgMIAAgCQAAgLhdirIg3hkIgFgMQgIgYgcgvIgNgVIgQglIATgKQAVAwAuBSQA0BdARAlQAUAuArBZQALAYAYArQARAmBWAaQAGAAAEgJQACgGAAgGQAAgFgDgIQgFgHAAgFQAAgEAIgPQAHgPAAgJIAAgLIgCgDIAAgCQgrhfhHiEIgBgBIAAAAIAAgBIgFgIQgKgXgPgaIhOiWIgSgnIAUgIIAAAEIAPAcQAPAmAXAsQAOAZAZAoIA3BmIAfA2IAAADQAEAOAKAQIAMAQIAfA+QAKAeAAARIgGAYIgGAKQgBABABABQAAAAAAABQAAAAAAABQAAAAAAAAIABABIgBAHIgNA0QAAACAAABQAAABAAAAQAAABABAAQAAAAAAAAIABAAIgGAFIgQAAIgPgCg");
	this.shape.setTransform(33.1,58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC99").s().p("Ah3BhIgDgCQgGgHgIgMIgNgWIAAgDQAAgHADgGIAOgUIAFAAIA4gZQA7gdANgGQAPgHAjgYIAWgPIAMgHIAEAAQAQgEAMABQAhAUAAAdQAAAmgvAVIgBgCIgEAAIABADIgBAAIAAACQgQAHgVAGQgeAIgPAHQgOAGgPAMIgVAPIAAgBIAAABIgIAFIgEgBQgEAAgNAFIgEAAIgBABIAAABIgJAEIgZAKgAh6AhIgBAEQACAFADAUQAFATAMAAQAGAAgCgDIAAgDQgMgGgDgNIgCgXIgFgBQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAhYAxQAEARAKAHQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgLgHgPQgKgTgCgFIgEAAIAHAcgAhBAAIAAADQAAAEAKAWQALAWAFAFIACgCIAAgDQgHgtgUgGIgBAAgAgUARQAEAOAMAHQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgJgKgFgMIgHgVIgFAAQAEAHAEARgAgIgVIAIAYQAFAQAEAHQAFgDAAgCIgJgcQgEgOgGAAIgDAAgAATgjQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAJAIAPQAIANAHAFQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQgEgFgFgPQgFgOgIgJIgCAAIgBAAgAAwgeQAEAGACALQACALAFADQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQgEgIgDgOIgFgXIgEAAgABEgxQAFAHAFAOIAGAVQAFgBAAgCIgRg0IgEAAgABbhIIgBAEQASAbADAYQAFgBAAgCQABgNgHgPQgGgPgKgKQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(18.4,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9999").s().p("AhiBAIgBgBIgEAAIgCABIgFAAQgDgGAAgHQAAgQAqgYIADgCQAUgJAdgNQAvgWBJgcIANANIgMAJQgQAEgPAJQgWALAAAGIAAABIgeANQhOAkglAZg");
	this.shape_2.setTransform(15.3,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ag5A5QgXgbgKgNQgGgPAAgQIABgPQACgQAHgNQAVgnA2gCQAoARAWAWIADAEIgDgCQAKAQALAWQALAZAOAmIgbAKQgbAMgjASIgiARQgIgQgXgbg");
	this.shape_3.setTransform(10.9,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADpG9IgkAAIgGgEIgFgBIgXgLQg8gcgQgYIgIgMIgKgZIgFgNIgDgIQgBgIgDgIIgCgEQgDgKgHgHIgEgJQgCgEgEgCIgSgmQgTgrgUghIgGgPQgEgHgRgaIgJgRIgFgGIgIgTQgbg0gUgmIgEgGQgVgmgIgPQgWAKgGAAQgKAAgKgEIgMgBQgGgGgHgLIgGgHQgOgUAAgKQgDgDgCAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgCIAHgMQAEgFAFgCIADgEIgDAAIgDgbQAAgSAVgLIAUgKIgRgUQgMgNgMgRQgZggAAgIIAAgBQgHgQgBgKQAAgmAbgeQAXgbAkADIgFgCQAfgBAcAUIAJAFIAEAGQAUATAGASQAHALAGAOIAMAgQAKAVAAACIAAABIAugNQAKAGABAEQABABAAAGIgBADIAagDIAAgBIAQABIAJALQARAMABAhQAAAagPARQgMANgYAMQBDCMBCBmIACAEIAHANIALAXQAPAdAYAsQA7BsAAAbIgFAWIgFATIgIAbIAAARIgBAEQAAAFgEAOIgEAMQgEACgFAAIgBAAgAiKhcIAPAmIAOAVQAcAtAIAYIAEAMIA3BlQBdCsAAALIAAACIAFAMIADAIIAJAPQAIAMAKALQANAIAXAMIAwAYIAQACIAQgBIAFgFIgBAAQAAABAAgBQAAAAAAAAQAAgBAAgBQgBgBAAgBIAOg1IABgHIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIAGgKIAHgYQAAgSgKgdIggg+IgLgQQgLgQgEgOIAAgDIgeg4Ig3hmQgZgmgOgZQgagsgPgmIgPgdIAAgDIgSAIIAQAmIBQCVQAPAaALAXIAEAIIAAAAIABABIABABQBGCGArBfIAAACIACADIABALQAAAJgHAPQgIAPAAAEQAAAFAEAHQAEAIAAAEQAAAHgDAGQgDAJgHAAQhWgagQgmQgYgsgMgXQgthZgTguQgQgng0heQguhQgUgvIgTAJgAgSiYQgIAChJAnIgQAIQAOARAQAjQAWAxAPASIAlBEQAVApAJAaQARArAxBeIAiBEQALAXAnAVQAfAQANAAQAIAAADgNIgIgYQAAgNAIgLQAHgLAAgIIgEABIAAgFIACgFIgDgEQgEgJACgDIAAAAQgLgagjhFQg7hxgIgTIgEgIIgVgoIgCgDIgBgCQgSgfgLgVIgKgPQgPgWgPgoIgEgJIgOghIgDgEIgGgJIgFABgAC/CjIAAgBIAAAAIgCgEIACAFgABMAMIADAFIgGgLIADAGgAjpiSQgDAGAAAHIABADIAMAWQAIAMAHAHIACACIARACIAZgKIAKgEIAAgBIABgBIADAAQANgFAEAAIAEABIAIgFIAAgBIABABIAUgPQASgMANgGQAPgHAegIQAVgGAOgHIAAgCIABAAIgBgDIAFAAIAAACQAvgXAAgmQAAgdgggUQgMgBgRAEIgCAAIgLAHIgXAPQgjAYgOAHQgPAGg8AdIg4AbIgEAAIgPAUgAjYitIACAAQAlgZBQglIAegOIAAgBQAAgGAWgLQAPgJAQgEIAMgKIgNgMQhJAcgxAWQgdANgUALIgDACQgqAYAAAQQAAAGADAHIAFAAIACgBIAEAAIABABgAj5mMQgHAOgCAQIgBAOQABASAGAQQAJAMAYAcQAWAaAIARIAkgRQAjgTAcgLIAbgKQgPgngLgaQgKgWgKgRIACACIgCgDQgWgXgqgRQg3ACgVAngAhpmIIAEADIgFgFIABACgAjNh6QgCgUgCgFIABgEQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAFABIACAXQAEANAMAGIAAADQABADgGAAQgMAAgFgTgAiuiHIgIgcIAEAAQACAFAKATQAIAPgBALQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgKgHgDgRgAiOibQgKgWAAgEIAAgEIABgBQAVAIAGAtIAAADIgCACQgFgFgLgWgAhrinQgEgSgEgIIAFAAIAHAXQAFAMAJAKQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQgMgHgEgOgAhVi1IgKgaQALgDAEARIAJAeQAAACgFADQgEgHgFgQgAg7jBQgIgPAAgJQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADAAQAJAJAEAOQAFARAEAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQgHgFgIgPgAgejHQgDgLgEgGIAAgPIAEAAIAGAXQADAOADAIQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQgEgFgCgLgAgHjWQgFgOgFgHIAAgNIAFAAIAOA0QAAACgDABIgGgVgAAEj+IABgEQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAKAKAHAPQAGAPgBANQAAACgEABQgEgYgRgbg");
	this.shape_4.setTransform(27.1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,89);


// stage content:
(lib.Prev_90_30_120_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pipette.visible = false;
		this.pipette2.visible = false;
		this.pipette_empty.visible = false;
		this.pipette_empty2.visible = false;
		
		this.filling.visible = false;
		this.Mask.visible = false;
		this.btn_reset.visible = false;
		
		this.e1.visible = false;
		this.e2.visible = false;
		this.e3.visible = false;
		this.e4.visible = false;
		this.e5.visible = false;
		this.e6.visible = false;
		this.e7.visible = false;
		this.e8.visible = false;
		this.e9.visible = false;
		this.e10.visible = false;
		this.e11.visible = false;
		this.e12.visible = false;
		this.e13.visible = false;
		this.e14.visible = false;
		this.e15.visible = false;
		this.e16.visible = false;
		this.e17.visible = false;
		this.e18.visible = false;
		this.e19.visible = false;
		this.e20.visible = false;
		this.e21.visible = false;
		this.e22.visible = false;
		this.e23.visible = false;
		this.e24.visible = false;
		this.e25.visible = false;
		this.e26.visible = false;
		this.e27.visible = false;
		this.e28.visible = false;
		this.e29.visible = false;
		this.e30.visible = false;
		this.e31.visible = false;
		this.e32.visible = false;
		this.e33.visible = false;
		this.e34.visible = false;
		this.e35.visible = false;
		this.e36.visible = false;
		this.e37.visible = false;
		this.e38.visible = false;
		this.e39.visible = false;
		this.e40.visible = false;
		this.e41.visible = false;
		this.e42.visible = false;
		this.e43.visible = false;
		this.e44.visible = false;
		this.e45.visible = false;
		this.e46.visible = false;
		this.e47.visible = false;
		this.e48.visible = false;
		this.e49.visible = false;
		this.e50.visible = false;
		this.e51.visible = false;
		this.e52.visible = false;
		this.e53.visible = false;
		this.e54.visible = false;
		this.e55.visible = false;
		this.e56.visible = false;
		this.e57.visible = false;
		this.e58.visible = false;
		this.e59.visible = false;
		this.e60.visible = false;
		this.e61.visible = false;
		this.e62.visible = false;
		this.e63.visible = false;
		this.e64.visible = false;
		this.e65.visible = false;
		this.e66.visible = false;
		this.e67.visible = false;
		this.e68.visible = false;
		this.e69.visible = false;
		this.e70.visible = false;
		this.e71.visible = false;
		this.e72.visible = false;
		this.e73.visible = false;
		this.e74.visible = false;
		this.e75.visible = false;
		this.e76.visible = false;
		this.e77.visible = false;
		this.e78.visible = false;
		this.e79.visible = false;
		this.e80.visible = false;
		this.e81.visible = false;
		this.e82.visible = false;
		this.e83.visible = false;
		this.e84.visible = false;
		this.e85.visible = false;
		this.e86.visible = false;
		this.e87.visible = false;
		this.e88.visible = false;
		this.e89.visible = false;
		this.e90.visible = false;
		this.e91.visible = false;
		this.e92.visible = false;
		this.e93.visible = false;
		this.e94.visible = false;
		this.e95.visible = false;
		this.e96.visible = false;
		this.e97.visible = false;
		this.e98.visible = false;
		this.e99.visible = false;
		this.e100.visible = false;
		this.e101.visible = false;
		this.e102.visible = false;
		this.e103.visible = false;
		this.e104.visible = false;
		this.e105.visible = false;
		this.e106.visible = false;
		this.e107.visible = false;
		this.e108.visible = false;
		this.e109.visible = false;
		this.e110.visible = false;
		this.e111.visible = false;
		this.e112.visible = false;
		this.e113.visible = false;
		this.e114.visible = false;
		this.e115.visible = false;
		this.e116.visible = false;
		this.e117.visible = false;
		this.e118.visible = false;
		this.e119.visible = false;
		this.e120.visible = false;
		this.e121.visible = false;
		this.e122.visible = false;
		this.e123.visible = false;
		this.e124.visible = false;
		this.e125.visible = false;
		this.e126.visible = false;
		this.e127.visible = false;
		this.e128.visible = false;
		this.e129.visible = false;
		this.e130.visible = false;
		this.e131.visible = false;
		this.e132.visible = false;
		this.e133.visible = false;
		this.e134.visible = false;
		this.e135.visible = false;
		this.e136.visible = false;
		this.e137.visible = false;
		this.e138.visible = false;
		this.e139.visible = false;
		this.e140.visible = false;
		this.e141.visible = false;
		this.e142.visible = false;
		this.e143.visible = false;
		this.e144.visible = false;
		this.e145.visible = false;
		this.e146.visible = false;
		this.e147.visible = false;
		this.e148.visible = false;
		this.e149.visible = false;
		this.e150.visible = false;
		this.e151.visible = false;
		this.e152.visible = false;
		this.e153.visible = false;
		this.e154.visible = false;
		this.e155.visible = false;
		this.e156.visible = false;
		this.e157.visible = false;
		this.e158.visible = false;
		this.e159.visible = false;
		this.e160.visible = false;
		this.e161.visible = false;
		this.e162.visible = false;
		this.e163.visible = false;
		this.e164.visible = false;
		this.e165.visible = false;
		this.e166.visible = false;
		this.e167.visible = false;
		this.e168.visible = false;
		this.e169.visible = false;
		this.e170.visible = false;
		this.e171.visible = false;
		this.e172.visible = false;
		this.e173.visible = false;
		this.e174.visible = false;
		this.e175.visible = false;
		this.e176.visible = false;
		this.e177.visible = false;
		this.e178.visible = false;
		this.e179.visible = false;
		this.e180.visible = false;
		this.e181.visible = false;
		this.e182.visible = false;
		this.e183.visible = false;
		this.e184.visible = false;
		this.e185.visible = false;
		this.e186.visible = false;
		this.e187.visible = false;
		this.e188.visible = false;
		this.e189.visible = false;
		this.e190.visible = false;
		this.e191.visible = false;
		this.e192.visible = false;
		this.e193.visible = false;
		this.e194.visible = false;
		this.e195.visible = false;
		this.e196.visible = false;
		this.e197.visible = false;
		this.e198.visible = false;
		this.e199.visible = false;
		this.e200.visible = false;
		this.e201.visible = false;
		this.e202.visible = false;
		this.e203.visible = false;
		this.e204.visible = false;
		this.e205.visible = false;
		this.e206.visible = false;
		this.e207.visible = false;
		this.e208.visible = false;
		this.e209.visible = false;
		this.e210.visible = false;
		this.e211.visible = false;
		this.e212.visible = false;
		this.e213.visible = false;
		this.e214.visible = false;
		this.e215.visible = false;
		this.e216.visible = false;
		this.e217.visible = false;
		this.e218.visible = false;
		this.e219.visible = false;
		this.e220.visible = false;
		this.e221.visible = false;
		this.e222.visible = false;
		this.e223.visible = false;
		this.e224.visible = false;
		this.e225.visible = false;
		this.e226.visible = false;
		this.e227.visible = false;
		this.e228.visible = false;
		this.e229.visible = false;
		this.e230.visible = false;
		this.e231.visible = false;
		this.e232.visible = false;
		this.e233.visible = false;
		this.e234.visible = false;
		this.e235.visible = false;
		this.e236.visible = false;
		this.e237.visible = false;
		this.e238.visible = false;
		this.e239.visible = false;
		this.e240.visible = false;
		
		
		var effectsA = [this.e1,   this.e2,   this.e3,   this.e4,   this.e5,   this.e6,   this.e7,   this.e8,   this.e9,   this.e10,  this.e11,  this.e12,  this.e13,  this.e14, 
						this.e15,  this.e16,  this.e17,  this.e18,  this.e19,  this.e20,  this.e21,  this.e22,  this.e23,  this.e24,  this.e25,  this.e26,  this.e27,  this.e28, 
						this.e29,  this.e30,  this.e31,  this.e32,  this.e33,  this.e34,  this.e35,  this.e36,  this.e37,  this.e38,  this.e39,  this.e40,  this.e41,  this.e42, 
						this.e43,  this.e44,  this.e45,  this.e46,  this.e47,  this.e48,  this.e49,  this.e50,  this.e51,  this.e52,  this.e53,  this.e54,  this.e55,  this.e56, 
						this.e57,  this.e58,  this.e59,  this.e60,  this.e61,  this.e62,  this.e63,  this.e64,  this.e65,  this.e66,  this.e67,  this.e68,  this.e69,  this.e70, 
						this.e71,  this.e72,  this.e73,  this.e74,  this.e75,  this.e76,  this.e77,  this.e78,  this.e79,  this.e80,  this.e81,  this.e82,  this.e83,  this.e84, 
						this.e85,  this.e86,  this.e87,  this.e88,  this.e89,  this.e90,  this.e91,  this.e92,  this.e93,  this.e94,  this.e95,  this.e96,  this.e97,  this.e98, 
						this.e99,  this.e100, this.e101, this.e102, this.e103, this.e104, this.e105, this.e106, this.e107, this.e108, this.e109, this.e110, this.e111, this.e112,
						this.e113, this.e114, this.e115, this.e116, this.e117, this.e118, this.e119, this.e120];
						
		var effectsB = [this.e121, this.e122, this.e123, this.e124, this.e125, this.e126, this.e127, this.e128, this.e129, this.e130, this.e131, this.e132, this.e133, this.e134,
						this.e135, this.e136, this.e137, this.e138, this.e139, this.e140, this.e141, this.e142, this.e143, this.e144, this.e145, this.e146, this.e147, this.e148,
						this.e149, this.e150, this.e151, this.e152, this.e153, this.e154, this.e155, this.e156, this.e157, this.e158, this.e159, this.e160, this.e161, this.e162,
						this.e163, this.e164, this.e165, this.e166, this.e167, this.e168, this.e169, this.e170, this.e171, this.e172, this.e173, this.e174, this.e175, this.e176,
						this.e177, this.e178, this.e179, this.e180, this.e181, this.e182, this.e183, this.e184, this.e185, this.e186, this.e187, this.e188, this.e189, this.e190,
						this.e191, this.e192, this.e193, this.e194, this.e195, this.e196, this.e197, this.e198, this.e199, this.e200, this.e201, this.e202, this.e203, this.e204,
						this.e205, this.e206, this.e207, this.e208, this.e209, this.e210, this.e211, this.e212, this.e213, this.e214, this.e215, this.e216, this.e217, this.e218,
						this.e219, this.e220, this.e221, this.e222, this.e223, this.e224, this.e225, this.e226, this.e227, this.e228, this.e229, this.e230, this.e231, this.e232,
						this.e233, this.e234, this.e235, this.e236, this.e237, this.e238, this.e239, this.e240];
		
		var masktime = 16000;
		
		var cells_die = [5226, 5324, 5415, 5500, 5579, 5655, 5728, 5797, 5864, 5929, 5991, 6052, 6111, 6169, 6226, 6281, 6335, 6389, 6441, 6493, 6544, 6594, 6643, 6692, 6741, 6789, 6836, 6883, 6930, 6977, 7023, 7069, 7114, 7160, 7205, 7250, 7294, 7339, 7384, 7428, 7473, 7517, 7561, 7605, 7650, 7694, 7738, 7782, 7827, 7871, 7916, 7960, 8005, 8050, 8095, 8140, 8186, 8231, 8277, 8323, 8369, 8416, 8462, 8509, 8557, 8604, 8653, 8701, 8750, 8799, 8849, 8899, 8950, 9001, 9052, 9105, 9157, 9211, 9265, 9320, 9375, 9432, 9489, 9547, 9606, 9666, 9726, 9788, 9851, 9915, 9981, 10047, 10116, 10185, 10256, 10329, 10404, 10480, 10559, 10640, 10723, 10809, 10898, 10989, 11084, 11183, 11286, 11392, 11504, 11621, 11745, 11875, 12013, 12159, 12317, 12486, 12670, 12871, 13094, 13345];
		
		var cells_die2 = [5226, 5324, 5415, 5500, 5579, 5655, 5728, 5797, 5864, 5929, 5991, 6052, 6111, 6169, 6226, 6281, 6335, 6389, 6441, 6493, 6544, 6594, 6643, 6692, 6741, 6789, 6836, 6883, 6930, 6977, 7023, 7069, 7114, 7160, 7205, 7250, 7294, 7339, 7384, 7428, 7473, 7517, 7561, 7605, 7650, 7694, 7738, 7782, 7827, 7871, 7916, 7960, 8005, 8050, 8095, 8140, 8186, 8231, 8277, 8323, 8369, 8416, 8462, 8509, 8557, 8604, 8653, 8701, 8750, 8799, 8849, 8899, 8950, 9001, 9052, 9105, 9157, 9211, 9265, 9320, 9375, 9432, 9489, 9547, 9606, 9666, 9726, 9788, 9851, 9915, 9981, 10047, 10116, 10185, 10256, 10329, 10404, 10480, 10559, 10640, 10723, 10809, 10898, 10989, 11084, 11183, 11286, 11392, 11504, 11621, 11745, 11875, 12013, 12159, 12317, 12486, 12670, 12871, 13094, 13345];
		
		// shuffle the array
		shuffle = (array) => array.sort(() => Math.random() - 0.5);
		
		shuffle(cells_die);
		shuffle(cells_die2);
		
		shuffle(effectsA);
		shuffle(effectsB);
		
		/////////////////////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////////////////
		
		this.btn_start.addEventListener("click", start_obs.bind(this));
		
		function start_obs() {
			let that = this;
			this.btn_start.visible = false;
			
			setTimeout (pipette_on, 2000);
				
				function pipette_on(){
					that.pipette.visible = true;
					that.pipette2.visible = true;
				}
				
			setTimeout (filling_on, 2700);
				
				function filling_on(){
					that.filling.visible = true;
					that.pipette.visible = false;
					that.pipette2.visible = false;
					that.pipette_empty.visible = true;
					that.pipette_empty2.visible = true;
				}
				
			
			setTimeout (counter_on, 2700);
			
			function counter_on(){
				var seconds = 0;
		
				var interval = setInterval(function(){
					seconds++;
					console.trace("seconds = " + seconds);
					that.clock.text = seconds + " hrs";
				
				if(seconds === (masktime-3000)/1000){
					clearInterval(interval);
					}
				
				},1000);
			};
				
				
			//////////////effects///////////////////////////////////////	
			setTimeout(e1_on, cells_die[0]); function e1_on(){effectsA[0].visible = true;}
			setTimeout(e2_on, cells_die[1]); function e2_on(){effectsA[1].visible = true;}
			setTimeout(e3_on, cells_die[2]); function e3_on(){effectsA[2].visible = true;}
			setTimeout(e4_on, cells_die[3]); function e4_on(){effectsA[3].visible = true;}
			setTimeout(e5_on, cells_die[4]); function e5_on(){effectsA[4].visible = true;}
			setTimeout(e6_on, cells_die[5]); function e6_on(){effectsA[5].visible = true;}
			setTimeout(e7_on, cells_die[6]); function e7_on(){effectsA[6].visible = true;}
			setTimeout(e8_on, cells_die[7]); function e8_on(){effectsA[7].visible = true;}
			setTimeout(e9_on, cells_die[8]); function e9_on(){effectsA[8].visible = true;}
			setTimeout(e10_on, cells_die[9]); function e10_on(){effectsA[9].visible = true;}
			setTimeout(e11_on, cells_die[10]); function e11_on(){effectsA[10].visible = true;}
			setTimeout(e12_on, cells_die[11]); function e12_on(){effectsA[11].visible = true;}
			setTimeout(e13_on, cells_die[12]); function e13_on(){effectsA[12].visible = true;}
			setTimeout(e14_on, cells_die[13]); function e14_on(){effectsA[13].visible = true;}
			setTimeout(e15_on, cells_die[14]); function e15_on(){effectsA[14].visible = true;}
			setTimeout(e16_on, cells_die[15]); function e16_on(){effectsA[15].visible = true;}
			setTimeout(e17_on, cells_die[16]); function e17_on(){effectsA[16].visible = true;}
			setTimeout(e18_on, cells_die[17]); function e18_on(){effectsA[17].visible = true;}
			setTimeout(e19_on, cells_die[18]); function e19_on(){effectsA[18].visible = true;}
			setTimeout(e20_on, cells_die[19]); function e20_on(){effectsA[19].visible = true;}
			setTimeout(e21_on, cells_die[20]); function e21_on(){effectsA[20].visible = true;}
			setTimeout(e22_on, cells_die[21]); function e22_on(){effectsA[21].visible = true;}
			setTimeout(e23_on, cells_die[22]); function e23_on(){effectsA[22].visible = true;}
			setTimeout(e24_on, cells_die[23]); function e24_on(){effectsA[23].visible = true;}
			setTimeout(e25_on, cells_die[24]); function e25_on(){effectsA[24].visible = true;}
			setTimeout(e26_on, cells_die[25]); function e26_on(){effectsA[25].visible = true;}
			setTimeout(e27_on, cells_die[26]); function e27_on(){effectsA[26].visible = true;}
			setTimeout(e28_on, cells_die[27]); function e28_on(){effectsA[27].visible = true;}
			setTimeout(e29_on, cells_die[28]); function e29_on(){effectsA[28].visible = true;}
			setTimeout(e30_on, cells_die[29]); function e30_on(){effectsA[29].visible = true;}
			setTimeout(e31_on, cells_die[30]); function e31_on(){effectsA[30].visible = true;}
			setTimeout(e32_on, cells_die[31]); function e32_on(){effectsA[31].visible = true;}
			setTimeout(e33_on, cells_die[32]); function e33_on(){effectsA[32].visible = true;}
			setTimeout(e34_on, cells_die[33]); function e34_on(){effectsA[33].visible = true;}
			setTimeout(e35_on, cells_die[34]); function e35_on(){effectsA[34].visible = true;}
			setTimeout(e36_on, cells_die[35]); function e36_on(){effectsA[35].visible = true;}
			setTimeout(e37_on, cells_die[36]); function e37_on(){effectsA[36].visible = true;}
			setTimeout(e38_on, cells_die[37]); function e38_on(){effectsA[37].visible = true;}
			setTimeout(e39_on, cells_die[38]); function e39_on(){effectsA[38].visible = true;}
			setTimeout(e40_on, cells_die[39]); function e40_on(){effectsA[39].visible = true;}
			setTimeout(e41_on, cells_die[40]); function e41_on(){effectsA[40].visible = true;}
			setTimeout(e42_on, cells_die[41]); function e42_on(){effectsA[41].visible = true;}
			setTimeout(e43_on, cells_die[42]); function e43_on(){effectsA[42].visible = true;}
			setTimeout(e44_on, cells_die[43]); function e44_on(){effectsA[43].visible = true;}
			setTimeout(e45_on, cells_die[44]); function e45_on(){effectsA[44].visible = true;}
			setTimeout(e46_on, cells_die[45]); function e46_on(){effectsA[45].visible = true;}
			setTimeout(e47_on, cells_die[46]); function e47_on(){effectsA[46].visible = true;}
			setTimeout(e48_on, cells_die[47]); function e48_on(){effectsA[47].visible = true;}
			setTimeout(e49_on, cells_die[48]); function e49_on(){effectsA[48].visible = true;}
			setTimeout(e50_on, cells_die[49]); function e50_on(){effectsA[49].visible = true;}
			setTimeout(e51_on, cells_die[50]); function e51_on(){effectsA[50].visible = true;}
			setTimeout(e52_on, cells_die[51]); function e52_on(){effectsA[51].visible = true;}
			setTimeout(e53_on, cells_die[52]); function e53_on(){effectsA[52].visible = true;}
			setTimeout(e54_on, cells_die[53]); function e54_on(){effectsA[53].visible = true;}
			setTimeout(e55_on, cells_die[54]); function e55_on(){effectsA[54].visible = true;}
			setTimeout(e56_on, cells_die[55]); function e56_on(){effectsA[55].visible = true;}
			setTimeout(e57_on, cells_die[56]); function e57_on(){effectsA[56].visible = true;}
			setTimeout(e58_on, cells_die[57]); function e58_on(){effectsA[57].visible = true;}
			setTimeout(e59_on, cells_die[58]); function e59_on(){effectsA[58].visible = true;}
			setTimeout(e60_on, cells_die[59]); function e60_on(){effectsA[59].visible = true;}
			setTimeout(e61_on, cells_die[60]); function e61_on(){effectsA[60].visible = true;}
			setTimeout(e62_on, cells_die[61]); function e62_on(){effectsA[61].visible = true;}
			setTimeout(e63_on, cells_die[62]); function e63_on(){effectsA[62].visible = true;}
			setTimeout(e64_on, cells_die[63]); function e64_on(){effectsA[63].visible = true;}
			setTimeout(e65_on, cells_die[64]); function e65_on(){effectsA[64].visible = true;}
			setTimeout(e66_on, cells_die[65]); function e66_on(){effectsA[65].visible = true;}
			setTimeout(e67_on, cells_die[66]); function e67_on(){effectsA[66].visible = true;}
			setTimeout(e68_on, cells_die[67]); function e68_on(){effectsA[67].visible = true;}
			setTimeout(e69_on, cells_die[68]); function e69_on(){effectsA[68].visible = true;}
			setTimeout(e70_on, cells_die[69]); function e70_on(){effectsA[69].visible = true;}
			setTimeout(e71_on, cells_die[70]); function e71_on(){effectsA[70].visible = true;}
			setTimeout(e72_on, cells_die[71]); function e72_on(){effectsA[71].visible = true;}
			setTimeout(e73_on, cells_die[72]); function e73_on(){effectsA[72].visible = true;}
			setTimeout(e74_on, cells_die[73]); function e74_on(){effectsA[73].visible = true;}
			setTimeout(e75_on, cells_die[74]); function e75_on(){effectsA[74].visible = true;}
			setTimeout(e76_on, cells_die[75]); function e76_on(){effectsA[75].visible = true;}
			setTimeout(e77_on, cells_die[76]); function e77_on(){effectsA[76].visible = true;}
			setTimeout(e78_on, cells_die[77]); function e78_on(){effectsA[77].visible = true;}
			setTimeout(e79_on, cells_die[78]); function e79_on(){effectsA[78].visible = true;}
			setTimeout(e80_on, cells_die[79]); function e80_on(){effectsA[79].visible = true;}
			setTimeout(e81_on, cells_die[80]); function e81_on(){effectsA[80].visible = true;}
			setTimeout(e82_on, cells_die[81]); function e82_on(){effectsA[81].visible = true;}
			setTimeout(e83_on, cells_die[82]); function e83_on(){effectsA[82].visible = true;}
			setTimeout(e84_on, cells_die[83]); function e84_on(){effectsA[83].visible = true;}
			setTimeout(e85_on, cells_die[84]); function e85_on(){effectsA[84].visible = true;}
			setTimeout(e86_on, cells_die[85]); function e86_on(){effectsA[85].visible = true;}
			setTimeout(e87_on, cells_die[86]); function e87_on(){effectsA[86].visible = true;}
			setTimeout(e88_on, cells_die[87]); function e88_on(){effectsA[87].visible = true;}
			setTimeout(e89_on, cells_die[88]); function e89_on(){effectsA[88].visible = true;}
			setTimeout(e90_on, cells_die[89]); function e90_on(){effectsA[89].visible = true;}
			/*setTimeout(e91_on, cells_die[90]); function e91_on(){effectsA[90].visible = true;}
			setTimeout(e92_on, cells_die[91]); function e92_on(){effectsA[91].visible = true;}
			setTimeout(e93_on, cells_die[92]); function e93_on(){effectsA[92].visible = true;}
			setTimeout(e94_on, cells_die[93]); function e94_on(){effectsA[93].visible = true;}
			setTimeout(e95_on, cells_die[94]); function e95_on(){effectsA[94].visible = true;}
			setTimeout(e96_on, cells_die[95]); function e96_on(){effectsA[95].visible = true;}
			setTimeout(e97_on, cells_die[96]); function e97_on(){effectsA[96].visible = true;}
			setTimeout(e98_on, cells_die[97]); function e98_on(){effectsA[97].visible = true;}
			setTimeout(e99_on, cells_die[98]); function e99_on(){effectsA[98].visible = true;}
			setTimeout(e100_on, cells_die[99]); function e100_on(){effectsA[99].visible = true;}
			setTimeout(e101_on, cells_die[100]); function e101_on(){effectsA[100].visible = true;}
			setTimeout(e102_on, cells_die[101]); function e102_on(){effectsA[101].visible = true;}
			setTimeout(e103_on, cells_die[102]); function e103_on(){effectsA[102].visible = true;}
			setTimeout(e104_on, cells_die[103]); function e104_on(){effectsA[103].visible = true;}
			setTimeout(e105_on, cells_die[104]); function e105_on(){effectsA[104].visible = true;}
			setTimeout(e106_on, cells_die[105]); function e106_on(){effectsA[105].visible = true;}
			setTimeout(e107_on, cells_die[106]); function e107_on(){effectsA[106].visible = true;}
			setTimeout(e108_on, cells_die[107]); function e108_on(){effectsA[107].visible = true;}
			setTimeout(e109_on, cells_die[108]); function e109_on(){effectsA[108].visible = true;}
			setTimeout(e110_on, cells_die[109]); function e110_on(){effectsA[109].visible = true;}
			setTimeout(e111_on, cells_die[110]); function e111_on(){effectsA[110].visible = true;}
			setTimeout(e112_on, cells_die[111]); function e112_on(){effectsA[111].visible = true;}
			setTimeout(e113_on, cells_die[112]); function e113_on(){effectsA[112].visible = true;}
			setTimeout(e114_on, cells_die[113]); function e114_on(){effectsA[113].visible = true;}
			setTimeout(e115_on, cells_die[114]); function e115_on(){effectsA[114].visible = true;}
			setTimeout(e116_on, cells_die[115]); function e116_on(){effectsA[115].visible = true;}
			setTimeout(e117_on, cells_die[116]); function e117_on(){effectsA[116].visible = true;}
			setTimeout(e118_on, cells_die[117]); function e118_on(){effectsA[117].visible = true;}
			setTimeout(e119_on, cells_die[118]); function e119_on(){effectsA[118].visible = true;}
			setTimeout(e120_on, cells_die[119]); function e120_on(){effectsA[119].visible = true;}
			*/
		
			
				///// other effects 
			setTimeout(e121_on, cells_die2[0]); function e121_on(){effectsB[0].visible = true;}
			setTimeout(e122_on, cells_die2[1]); function e122_on(){effectsB[1].visible = true;}
			setTimeout(e123_on, cells_die2[2]); function e123_on(){effectsB[2].visible = true;}
			setTimeout(e124_on, cells_die2[3]); function e124_on(){effectsB[3].visible = true;}
			setTimeout(e125_on, cells_die2[4]); function e125_on(){effectsB[4].visible = true;}
			setTimeout(e126_on, cells_die2[5]); function e126_on(){effectsB[5].visible = true;}
			setTimeout(e127_on, cells_die2[6]); function e127_on(){effectsB[6].visible = true;}
			setTimeout(e128_on, cells_die2[7]); function e128_on(){effectsB[7].visible = true;}
			setTimeout(e129_on, cells_die2[8]); function e129_on(){effectsB[8].visible = true;}
			setTimeout(e130_on, cells_die2[9]); function e130_on(){effectsB[9].visible = true;}
			setTimeout(e131_on, cells_die2[10]); function e131_on(){effectsB[10].visible = true;}
			setTimeout(e132_on, cells_die2[11]); function e132_on(){effectsB[11].visible = true;}
			setTimeout(e133_on, cells_die2[12]); function e133_on(){effectsB[12].visible = true;}
			setTimeout(e134_on, cells_die2[13]); function e134_on(){effectsB[13].visible = true;}
			setTimeout(e135_on, cells_die2[14]); function e135_on(){effectsB[14].visible = true;}
			setTimeout(e136_on, cells_die2[15]); function e136_on(){effectsB[15].visible = true;}
			setTimeout(e137_on, cells_die2[16]); function e137_on(){effectsB[16].visible = true;}
			setTimeout(e138_on, cells_die2[17]); function e138_on(){effectsB[17].visible = true;}
			setTimeout(e139_on, cells_die2[18]); function e139_on(){effectsB[18].visible = true;}
			setTimeout(e140_on, cells_die2[19]); function e140_on(){effectsB[19].visible = true;}
			setTimeout(e141_on, cells_die2[20]); function e141_on(){effectsB[20].visible = true;}
			setTimeout(e142_on, cells_die2[21]); function e142_on(){effectsB[21].visible = true;}
			setTimeout(e143_on, cells_die2[22]); function e143_on(){effectsB[22].visible = true;}
			setTimeout(e144_on, cells_die2[23]); function e144_on(){effectsB[23].visible = true;}
			setTimeout(e145_on, cells_die2[24]); function e145_on(){effectsB[24].visible = true;}
			setTimeout(e146_on, cells_die2[25]); function e146_on(){effectsB[25].visible = true;}
			setTimeout(e147_on, cells_die2[26]); function e147_on(){effectsB[26].visible = true;}
			setTimeout(e148_on, cells_die2[27]); function e148_on(){effectsB[27].visible = true;}
			setTimeout(e149_on, cells_die2[28]); function e149_on(){effectsB[28].visible = true;}
			setTimeout(e150_on, cells_die2[29]); function e150_on(){effectsB[29].visible = true;}
			setTimeout(e151_on, cells_die2[30]); function e151_on(){effectsB[30].visible = true;}
			setTimeout(e152_on, cells_die2[31]); function e152_on(){effectsB[31].visible = true;}
			setTimeout(e153_on, cells_die2[32]); function e153_on(){effectsB[32].visible = true;}
			setTimeout(e154_on, cells_die2[33]); function e154_on(){effectsB[33].visible = true;}
			setTimeout(e155_on, cells_die2[34]); function e155_on(){effectsB[34].visible = true;}
			setTimeout(e156_on, cells_die2[35]); function e156_on(){effectsB[35].visible = true;}
			setTimeout(e157_on, cells_die2[36]); function e157_on(){effectsB[36].visible = true;}
			setTimeout(e158_on, cells_die2[37]); function e158_on(){effectsB[37].visible = true;}
			setTimeout(e159_on, cells_die2[38]); function e159_on(){effectsB[38].visible = true;}
			setTimeout(e160_on, cells_die2[39]); function e160_on(){effectsB[39].visible = true;}
			setTimeout(e161_on, cells_die2[40]); function e161_on(){effectsB[40].visible = true;}
			setTimeout(e162_on, cells_die2[41]); function e162_on(){effectsB[41].visible = true;}
			setTimeout(e163_on, cells_die2[42]); function e163_on(){effectsB[42].visible = true;}
			setTimeout(e164_on, cells_die2[43]); function e164_on(){effectsB[43].visible = true;}
			setTimeout(e165_on, cells_die2[44]); function e165_on(){effectsB[44].visible = true;}
			setTimeout(e166_on, cells_die2[45]); function e166_on(){effectsB[45].visible = true;}
			setTimeout(e167_on, cells_die2[46]); function e167_on(){effectsB[46].visible = true;}
			setTimeout(e168_on, cells_die2[47]); function e168_on(){effectsB[47].visible = true;}
			setTimeout(e169_on, cells_die2[48]); function e169_on(){effectsB[48].visible = true;}
			setTimeout(e170_on, cells_die2[49]); function e170_on(){effectsB[49].visible = true;}
			setTimeout(e171_on, cells_die2[50]); function e171_on(){effectsB[50].visible = true;}
			setTimeout(e172_on, cells_die2[51]); function e172_on(){effectsB[51].visible = true;}
			setTimeout(e173_on, cells_die2[52]); function e173_on(){effectsB[52].visible = true;}
			setTimeout(e174_on, cells_die2[53]); function e174_on(){effectsB[53].visible = true;}
			setTimeout(e175_on, cells_die2[54]); function e175_on(){effectsB[54].visible = true;}
			setTimeout(e176_on, cells_die2[55]); function e176_on(){effectsB[55].visible = true;}
			setTimeout(e177_on, cells_die2[56]); function e177_on(){effectsB[56].visible = true;}
			setTimeout(e178_on, cells_die2[57]); function e178_on(){effectsB[57].visible = true;}
			setTimeout(e179_on, cells_die2[58]); function e179_on(){effectsB[58].visible = true;}
			setTimeout(e180_on, cells_die2[59]); function e180_on(){effectsB[59].visible = true;}
			setTimeout(e181_on, cells_die2[60]); function e181_on(){effectsB[60].visible = true;}
			setTimeout(e182_on, cells_die2[61]); function e182_on(){effectsB[61].visible = true;}
			setTimeout(e183_on, cells_die2[62]); function e183_on(){effectsB[62].visible = true;}
			setTimeout(e184_on, cells_die2[63]); function e184_on(){effectsB[63].visible = true;}
			setTimeout(e185_on, cells_die2[64]); function e185_on(){effectsB[64].visible = true;}
			setTimeout(e186_on, cells_die2[65]); function e186_on(){effectsB[65].visible = true;}
			setTimeout(e187_on, cells_die2[66]); function e187_on(){effectsB[66].visible = true;}
			setTimeout(e188_on, cells_die2[67]); function e188_on(){effectsB[67].visible = true;}
			setTimeout(e189_on, cells_die2[68]); function e189_on(){effectsB[68].visible = true;}
			setTimeout(e190_on, cells_die2[69]); function e190_on(){effectsB[69].visible = true;}
			setTimeout(e191_on, cells_die2[70]); function e191_on(){effectsB[70].visible = true;}
			setTimeout(e192_on, cells_die2[71]); function e192_on(){effectsB[71].visible = true;}
			setTimeout(e193_on, cells_die2[72]); function e193_on(){effectsB[72].visible = true;}
			setTimeout(e194_on, cells_die2[73]); function e194_on(){effectsB[73].visible = true;}
			setTimeout(e195_on, cells_die2[74]); function e195_on(){effectsB[74].visible = true;}
			setTimeout(e196_on, cells_die2[75]); function e196_on(){effectsB[75].visible = true;}
			setTimeout(e197_on, cells_die2[76]); function e197_on(){effectsB[76].visible = true;}
			setTimeout(e198_on, cells_die2[77]); function e198_on(){effectsB[77].visible = true;}
			setTimeout(e199_on, cells_die2[78]); function e199_on(){effectsB[78].visible = true;}
			setTimeout(e200_on, cells_die2[79]); function e200_on(){effectsB[79].visible = true;}
			setTimeout(e201_on, cells_die2[80]); function e201_on(){effectsB[80].visible = true;}
			setTimeout(e202_on, cells_die2[81]); function e202_on(){effectsB[81].visible = true;}
			setTimeout(e203_on, cells_die2[82]); function e203_on(){effectsB[82].visible = true;}
			setTimeout(e204_on, cells_die2[83]); function e204_on(){effectsB[83].visible = true;}
			setTimeout(e205_on, cells_die2[84]); function e205_on(){effectsB[84].visible = true;}
			setTimeout(e206_on, cells_die2[85]); function e206_on(){effectsB[85].visible = true;}
			setTimeout(e207_on, cells_die2[86]); function e207_on(){effectsB[86].visible = true;}
			setTimeout(e208_on, cells_die2[87]); function e208_on(){effectsB[87].visible = true;}
			setTimeout(e209_on, cells_die2[88]); function e209_on(){effectsB[88].visible = true;}
			setTimeout(e210_on, cells_die2[89]); function e210_on(){effectsB[89].visible = true;}
			setTimeout(e211_on, cells_die2[90]); function e211_on(){effectsB[90].visible = true;}
			setTimeout(e212_on, cells_die2[91]); function e212_on(){effectsB[91].visible = true;}
			setTimeout(e213_on, cells_die2[92]); function e213_on(){effectsB[92].visible = true;}
			setTimeout(e214_on, cells_die2[93]); function e214_on(){effectsB[93].visible = true;}
			setTimeout(e215_on, cells_die2[94]); function e215_on(){effectsB[94].visible = true;}
			setTimeout(e216_on, cells_die2[95]); function e216_on(){effectsB[95].visible = true;}
			setTimeout(e217_on, cells_die2[96]); function e217_on(){effectsB[96].visible = true;}
			setTimeout(e218_on, cells_die2[97]); function e218_on(){effectsB[97].visible = true;}
			setTimeout(e219_on, cells_die2[98]); function e219_on(){effectsB[98].visible = true;}
			setTimeout(e220_on, cells_die2[99]); function e220_on(){effectsB[99].visible = true;}
			setTimeout(e221_on, cells_die2[100]); function e221_on(){effectsB[100].visible = true;}
			setTimeout(e222_on, cells_die2[101]); function e222_on(){effectsB[101].visible = true;}
			setTimeout(e223_on, cells_die2[102]); function e223_on(){effectsB[102].visible = true;}
			setTimeout(e224_on, cells_die2[103]); function e224_on(){effectsB[103].visible = true;}
			setTimeout(e225_on, cells_die2[104]); function e225_on(){effectsB[104].visible = true;}
			setTimeout(e226_on, cells_die2[105]); function e226_on(){effectsB[105].visible = true;}
			setTimeout(e227_on, cells_die2[106]); function e227_on(){effectsB[106].visible = true;}
			setTimeout(e228_on, cells_die2[107]); function e228_on(){effectsB[107].visible = true;}
			setTimeout(e229_on, cells_die2[108]); function e229_on(){effectsB[108].visible = true;}
			setTimeout(e230_on, cells_die2[109]); function e230_on(){effectsB[109].visible = true;}
			setTimeout(e231_on, cells_die2[110]); function e231_on(){effectsB[110].visible = true;}
			setTimeout(e232_on, cells_die2[111]); function e232_on(){effectsB[111].visible = true;}
			setTimeout(e233_on, cells_die2[112]); function e233_on(){effectsB[112].visible = true;}
			setTimeout(e234_on, cells_die2[113]); function e234_on(){effectsB[113].visible = true;}
			setTimeout(e235_on, cells_die2[114]); function e235_on(){effectsB[114].visible = true;}
			setTimeout(e236_on, cells_die2[115]); function e236_on(){effectsB[115].visible = true;}
			setTimeout(e237_on, cells_die2[116]); function e237_on(){effectsB[116].visible = true;}
			setTimeout(e238_on, cells_die2[117]); function e238_on(){effectsB[117].visible = true;}
			setTimeout(e239_on, cells_die2[118]); function e239_on(){effectsB[118].visible = true;}
			setTimeout(e240_on, cells_die2[119]); function e240_on(){effectsB[119].visible = true;}
		    
		
				////// let reset appear 
				
			setTimeout (resetVisible, masktime);
				
				function resetVisible(){
					that.btn_reset.visible = true;
					that.Mask.visible = true;
				}
				
		}
		
		
		//////////////////////////////////////////////////////////////////////////////
		this.btn_reset.addEventListener("click", reset_obs.bind(this));
		
		function reset_obs() {
			let that = this;
			
			seconds = 0;
			that.clock.text = "_ _ hrs";
			
			this.btn_reset.visible = false;
			this.Mask.visible = false;
			this.btn_start.visible = true;
			
			this.pipette_empty.visible = false;
			this.pipette_empty2.visible = false;
			this.filling.visible = false;
			
			this.e1.visible = false;
			this.e2.visible = false;
			this.e3.visible = false;
			this.e4.visible = false;
			this.e5.visible = false;
			this.e6.visible = false;
			this.e7.visible = false;
			this.e8.visible = false;
			this.e9.visible = false;
			this.e10.visible = false;
			this.e11.visible = false;
			this.e12.visible = false;
			this.e13.visible = false;
			this.e14.visible = false;
			this.e15.visible = false;
			this.e16.visible = false;
			this.e17.visible = false;
			this.e18.visible = false;
			this.e19.visible = false;
			this.e20.visible = false;
			this.e21.visible = false;
			this.e22.visible = false;
			this.e23.visible = false;
			this.e24.visible = false;
			this.e25.visible = false;
			this.e26.visible = false;
			this.e27.visible = false;
			this.e28.visible = false;
			this.e29.visible = false;
			this.e30.visible = false;
			this.e31.visible = false;
			this.e32.visible = false;
			this.e33.visible = false;
			this.e34.visible = false;
			this.e35.visible = false;
			this.e36.visible = false;
			this.e37.visible = false;
			this.e38.visible = false;
			this.e39.visible = false;
			this.e40.visible = false;
			this.e41.visible = false;
			this.e42.visible = false;
			this.e43.visible = false;
			this.e44.visible = false;
			this.e45.visible = false;
			this.e46.visible = false;
			this.e47.visible = false;
			this.e48.visible = false;
			this.e49.visible = false;
			this.e50.visible = false;
			this.e51.visible = false;
			this.e52.visible = false;
			this.e53.visible = false;
			this.e54.visible = false;
			this.e55.visible = false;
			this.e56.visible = false;
			this.e57.visible = false;
			this.e58.visible = false;
			this.e59.visible = false;
			this.e60.visible = false;
			this.e61.visible = false;
			this.e62.visible = false;
			this.e63.visible = false;
			this.e64.visible = false;
			this.e65.visible = false;
			this.e66.visible = false;
			this.e67.visible = false;
			this.e68.visible = false;
			this.e69.visible = false;
			this.e70.visible = false;
			this.e71.visible = false;
			this.e72.visible = false;
			this.e73.visible = false;
			this.e74.visible = false;
			this.e75.visible = false;
			this.e76.visible = false;
			this.e77.visible = false;
			this.e78.visible = false;
			this.e79.visible = false;
			this.e80.visible = false;
			this.e81.visible = false;
			this.e82.visible = false;
			this.e83.visible = false;
			this.e84.visible = false;
			this.e85.visible = false;
			this.e86.visible = false;
			this.e87.visible = false;
			this.e88.visible = false;
			this.e89.visible = false;
			this.e90.visible = false;
			this.e91.visible = false;
			this.e92.visible = false;
			this.e93.visible = false;
			this.e94.visible = false;
			this.e95.visible = false;
			this.e96.visible = false;
			this.e97.visible = false;
			this.e98.visible = false;
			this.e99.visible = false;
			this.e100.visible = false;
			this.e101.visible = false;
			this.e102.visible = false;
			this.e103.visible = false;
			this.e104.visible = false;
			this.e105.visible = false;
			this.e106.visible = false;
			this.e107.visible = false;
			this.e108.visible = false;
			this.e109.visible = false;
			this.e110.visible = false;
			this.e111.visible = false;
			this.e112.visible = false;
			this.e113.visible = false;
			this.e114.visible = false;
			this.e115.visible = false;
			this.e116.visible = false;
			this.e117.visible = false;
			this.e118.visible = false;
			this.e119.visible = false;
			this.e120.visible = false;
			this.e121.visible = false;
			this.e122.visible = false;
			this.e123.visible = false;
			this.e124.visible = false;
			this.e125.visible = false;
			this.e126.visible = false;
			this.e127.visible = false;
			this.e128.visible = false;
			this.e129.visible = false;
			this.e130.visible = false;
			this.e131.visible = false;
			this.e132.visible = false;
			this.e133.visible = false;
			this.e134.visible = false;
			this.e135.visible = false;
			this.e136.visible = false;
			this.e137.visible = false;
			this.e138.visible = false;
			this.e139.visible = false;
			this.e140.visible = false;
			this.e141.visible = false;
			this.e142.visible = false;
			this.e143.visible = false;
			this.e144.visible = false;
			this.e145.visible = false;
			this.e146.visible = false;
			this.e147.visible = false;
			this.e148.visible = false;
			this.e149.visible = false;
			this.e150.visible = false;
			this.e151.visible = false;
			this.e152.visible = false;
			this.e153.visible = false;
			this.e154.visible = false;
			this.e155.visible = false;
			this.e156.visible = false;
			this.e157.visible = false;
			this.e158.visible = false;
			this.e159.visible = false;
			this.e160.visible = false;
			this.e161.visible = false;
			this.e162.visible = false;
			this.e163.visible = false;
			this.e164.visible = false;
			this.e165.visible = false;
			this.e166.visible = false;
			this.e167.visible = false;
			this.e168.visible = false;
			this.e169.visible = false;
			this.e170.visible = false;
			this.e171.visible = false;
			this.e172.visible = false;
			this.e173.visible = false;
			this.e174.visible = false;
			this.e175.visible = false;
			this.e176.visible = false;
			this.e177.visible = false;
			this.e178.visible = false;
			this.e179.visible = false;
			this.e180.visible = false;
			this.e181.visible = false;
			this.e182.visible = false;
			this.e183.visible = false;
			this.e184.visible = false;
			this.e185.visible = false;
			this.e186.visible = false;
			this.e187.visible = false;
			this.e188.visible = false;
			this.e189.visible = false;
			this.e190.visible = false;
			this.e191.visible = false;
			this.e192.visible = false;
			this.e193.visible = false;
			this.e194.visible = false;
			this.e195.visible = false;
			this.e196.visible = false;
			this.e197.visible = false;
			this.e198.visible = false;
			this.e199.visible = false;
			this.e200.visible = false;
			this.e201.visible = false;
			this.e202.visible = false;
			this.e203.visible = false;
			this.e204.visible = false;
			this.e205.visible = false;
			this.e206.visible = false;
			this.e207.visible = false;
			this.e208.visible = false;
			this.e209.visible = false;
			this.e210.visible = false;
			this.e211.visible = false;
			this.e212.visible = false;
			this.e213.visible = false;
			this.e214.visible = false;
			this.e215.visible = false;
			this.e216.visible = false;
			this.e217.visible = false;
			this.e218.visible = false;
			this.e219.visible = false;
			this.e220.visible = false;
			this.e221.visible = false;
			this.e222.visible = false;
			this.e223.visible = false;
			this.e224.visible = false;
			this.e225.visible = false;
			this.e226.visible = false;
			this.e227.visible = false;
			this.e228.visible = false;
			this.e229.visible = false;
			this.e230.visible = false;
			this.e231.visible = false;
			this.e232.visible = false;
			this.e233.visible = false;
			this.e234.visible = false;
			this.e235.visible = false;
			this.e236.visible = false;
			this.e237.visible = false;
			this.e238.visible = false;
			this.e239.visible = false;
			this.e240.visible = false;
		
		}
		
		
		
		
		///// Handle responsive scaling of the canvas 
		
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#bdbdbd";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight > widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene 5
	this.Mask = new lib.WhiteMask();
	this.Mask.setTransform(399.5,306.2,1,1,0,0,0,390.4,270.6);

	this.timeline.addTween(cjs.Tween.get(this.Mask).wait(1));

	// Ebene 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape.setTransform(428.6,450.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_1.setTransform(419.1,450.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_2.setTransform(412.6,449.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_3.setTransform(408.6,449.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(401.6,450.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAbIAAgPIBTAAIAAAPgAgpgLIAAgOIBTAAIAAAOg");
	this.shape_5.setTransform(386.4,449.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAHAEQAGAEAEAGIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBASAIAIQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_6.setTransform(431.3,413.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_7.setTransform(421.6,415.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_8.setTransform(411.6,415.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAHgJABgRQgBgSgHgIQgHgKgLABQgIgBgHAKg");
	this.shape_9.setTransform(401.3,413.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgpAaIAAgPIBTAAIAAAPgAgpgLIAAgOIBTAAIAAAOg");
	this.shape_10.setTransform(386.4,413.6);

	this._null = new lib.effect();
	this._null.setTransform(368.3,413.1,0.837,0.836,0,0,0,13,12.5);

	this.instance = new lib.no_effect();
	this.instance.setTransform(368.3,449.4,0.998,0.998,0,0,0,10.9,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AolEmIAApLIRKAAIAAJLg");
	this.shape_11.setTransform(421,411.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance},{t:this._null},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Ebene 4
	this.e176 = new lib.effect();
	this.e176.setTransform(713.7,353.4,0.655,0.655,0,0,0,13,12.9);

	this.e180 = new lib.effect();
	this.e180.setTransform(733.6,353.1,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_1 = new lib.no_effect();
	this.instance_1.setTransform(713.7,353.4,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_2 = new lib.no_effect();
	this.instance_2.setTransform(733.6,353,0.782,0.782,0,0,0,10.9,10.8);

	this.e168 = new lib.effect();
	this.e168.setTransform(673,353.3,0.655,0.655,0,0,0,13,12.9);

	this.e160 = new lib.effect();
	this.e160.setTransform(632.5,353.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e172 = new lib.effect();
	this.e172.setTransform(692.9,352.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e164 = new lib.effect();
	this.e164.setTransform(652.6,353.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e156 = new lib.effect();
	this.e156.setTransform(611.7,353.4,0.655,0.655,0,0,0,13,12.5);

	this.e148 = new lib.effect();
	this.e148.setTransform(571.3,353.3,0.655,0.655,0,0,0,13,12.9);

	this.e140 = new lib.effect();
	this.e140.setTransform(530.5,353.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e152 = new lib.effect();
	this.e152.setTransform(591.3,353.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e144 = new lib.effect();
	this.e144.setTransform(550.9,353.3,0.655,0.655,0,0,0,13,12.5);

	this.e136 = new lib.effect();
	this.e136.setTransform(510.3,353.4,0.655,0.655,0,0,0,13,12.5);

	this.instance_3 = new lib.no_effect();
	this.instance_3.setTransform(673,353.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_4 = new lib.no_effect();
	this.instance_4.setTransform(632.5,353.3,0.782,0.782,0,0,0,11,10.8);

	this.instance_5 = new lib.no_effect();
	this.instance_5.setTransform(510.3,353.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_6 = new lib.no_effect();
	this.instance_6.setTransform(530.5,353.3,0.782,0.782,0,0,0,11,10.8);

	this.instance_7 = new lib.no_effect();
	this.instance_7.setTransform(550.9,353.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_8 = new lib.no_effect();
	this.instance_8.setTransform(571.3,353.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_9 = new lib.no_effect();
	this.instance_9.setTransform(591.3,353.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_10 = new lib.no_effect();
	this.instance_10.setTransform(611.7,353.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_11 = new lib.no_effect();
	this.instance_11.setTransform(652.6,353.3,0.782,0.782,0,0,0,11,10.8);

	this.instance_12 = new lib.no_effect();
	this.instance_12.setTransform(692.9,352.8,0.782,0.782,0,0,0,10.9,10.8);

	this.e175 = new lib.effect();
	this.e175.setTransform(713.1,334.3,0.655,0.655,0,0,0,13,12.9);

	this.e179 = new lib.effect();
	this.e179.setTransform(733,334,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_13 = new lib.no_effect();
	this.instance_13.setTransform(713.1,334.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_14 = new lib.no_effect();
	this.instance_14.setTransform(733,333.9,0.782,0.782,0,0,0,10.9,10.8);

	this.e167 = new lib.effect();
	this.e167.setTransform(672.4,334.2,0.655,0.655,0,0,0,13,12.9);

	this.e159 = new lib.effect();
	this.e159.setTransform(631.9,334.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e171 = new lib.effect();
	this.e171.setTransform(692.3,333.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e163 = new lib.effect();
	this.e163.setTransform(652,334.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e155 = new lib.effect();
	this.e155.setTransform(611.1,334.3,0.655,0.655,0,0,0,13,12.5);

	this.e147 = new lib.effect();
	this.e147.setTransform(570.7,334.2,0.655,0.655,0,0,0,13,12.9);

	this.e139 = new lib.effect();
	this.e139.setTransform(529.9,334.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e151 = new lib.effect();
	this.e151.setTransform(590.7,334.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e143 = new lib.effect();
	this.e143.setTransform(550.3,334.2,0.655,0.655,0,0,0,13,12.5);

	this.e135 = new lib.effect();
	this.e135.setTransform(509.7,334.3,0.655,0.655,0,0,0,13,12.5);

	this.instance_15 = new lib.no_effect();
	this.instance_15.setTransform(672.4,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_16 = new lib.no_effect();
	this.instance_16.setTransform(631.9,334.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_17 = new lib.no_effect();
	this.instance_17.setTransform(509.7,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_18 = new lib.no_effect();
	this.instance_18.setTransform(529.9,334.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_19 = new lib.no_effect();
	this.instance_19.setTransform(550.3,334.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_20 = new lib.no_effect();
	this.instance_20.setTransform(570.7,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_21 = new lib.no_effect();
	this.instance_21.setTransform(590.7,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_22 = new lib.no_effect();
	this.instance_22.setTransform(611.1,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_23 = new lib.no_effect();
	this.instance_23.setTransform(652,334.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_24 = new lib.no_effect();
	this.instance_24.setTransform(692.3,333.7,0.782,0.782,0,0,0,10.9,10.8);

	this.e174 = new lib.effect();
	this.e174.setTransform(713.3,314,0.655,0.655,0,0,0,13,12.9);

	this.e178 = new lib.effect();
	this.e178.setTransform(733.2,313.7,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_25 = new lib.no_effect();
	this.instance_25.setTransform(713.3,314,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_26 = new lib.no_effect();
	this.instance_26.setTransform(733.2,313.6,0.782,0.782,0,0,0,10.9,10.8);

	this.e166 = new lib.effect();
	this.e166.setTransform(672.6,313.9,0.655,0.655,0,0,0,13,12.9);

	this.e158 = new lib.effect();
	this.e158.setTransform(632.1,314,0.655,0.655,0,0,0,13.1,12.5);

	this.e170 = new lib.effect();
	this.e170.setTransform(692.5,313.5,0.655,0.655,0,0,0,13.1,12.5);

	this.e162 = new lib.effect();
	this.e162.setTransform(652.2,314,0.655,0.655,0,0,0,13.1,12.5);

	this.e154 = new lib.effect();
	this.e154.setTransform(611.3,314,0.655,0.655,0,0,0,13,12.5);

	this.e146 = new lib.effect();
	this.e146.setTransform(570.9,313.9,0.655,0.655,0,0,0,13,12.9);

	this.e138 = new lib.effect();
	this.e138.setTransform(530.1,314,0.655,0.655,0,0,0,13.1,12.5);

	this.e150 = new lib.effect();
	this.e150.setTransform(590.9,314,0.655,0.655,0,0,0,13.1,12.5);

	this.e142 = new lib.effect();
	this.e142.setTransform(550.5,313.9,0.655,0.655,0,0,0,13,12.5);

	this.e134 = new lib.effect();
	this.e134.setTransform(509.9,314,0.655,0.655,0,0,0,13,12.5);

	this.instance_27 = new lib.no_effect();
	this.instance_27.setTransform(672.6,313.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_28 = new lib.no_effect();
	this.instance_28.setTransform(632.1,313.9,0.782,0.782,0,0,0,11,10.8);

	this.instance_29 = new lib.no_effect();
	this.instance_29.setTransform(509.9,313.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_30 = new lib.no_effect();
	this.instance_30.setTransform(530.1,313.9,0.782,0.782,0,0,0,11,10.8);

	this.instance_31 = new lib.no_effect();
	this.instance_31.setTransform(550.5,313.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_32 = new lib.no_effect();
	this.instance_32.setTransform(570.9,313.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_33 = new lib.no_effect();
	this.instance_33.setTransform(590.9,313.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_34 = new lib.no_effect();
	this.instance_34.setTransform(611.3,313.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_35 = new lib.no_effect();
	this.instance_35.setTransform(652.2,313.9,0.782,0.782,0,0,0,11,10.8);

	this.instance_36 = new lib.no_effect();
	this.instance_36.setTransform(692.5,313.4,0.782,0.782,0,0,0,10.9,10.8);

	this.e173 = new lib.effect();
	this.e173.setTransform(712.7,294.9,0.655,0.655,0,0,0,13,12.9);

	this.e177 = new lib.effect();
	this.e177.setTransform(732.6,294.6,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_37 = new lib.no_effect();
	this.instance_37.setTransform(712.7,294.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_38 = new lib.no_effect();
	this.instance_38.setTransform(732.6,294.5,0.782,0.782,0,0,0,10.9,10.8);

	this.e165 = new lib.effect();
	this.e165.setTransform(672,294.8,0.655,0.655,0,0,0,13,12.9);

	this.e157 = new lib.effect();
	this.e157.setTransform(631.5,294.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e169 = new lib.effect();
	this.e169.setTransform(691.9,294.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e161 = new lib.effect();
	this.e161.setTransform(651.6,294.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e153 = new lib.effect();
	this.e153.setTransform(610.7,294.9,0.655,0.655,0,0,0,13,12.5);

	this.e145 = new lib.effect();
	this.e145.setTransform(570.3,294.8,0.655,0.655,0,0,0,13,12.9);

	this.e137 = new lib.effect();
	this.e137.setTransform(529.5,294.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e149 = new lib.effect();
	this.e149.setTransform(590.3,294.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e141 = new lib.effect();
	this.e141.setTransform(549.9,294.8,0.655,0.655,0,0,0,13,12.5);

	this.e133 = new lib.effect();
	this.e133.setTransform(509.3,294.9,0.655,0.655,0,0,0,13,12.5);

	this.instance_39 = new lib.no_effect();
	this.instance_39.setTransform(672,294.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_40 = new lib.no_effect();
	this.instance_40.setTransform(631.5,294.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_41 = new lib.no_effect();
	this.instance_41.setTransform(509.3,294.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_42 = new lib.no_effect();
	this.instance_42.setTransform(529.5,294.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_43 = new lib.no_effect();
	this.instance_43.setTransform(549.9,294.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_44 = new lib.no_effect();
	this.instance_44.setTransform(570.3,294.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_45 = new lib.no_effect();
	this.instance_45.setTransform(590.3,294.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_46 = new lib.no_effect();
	this.instance_46.setTransform(610.7,294.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_47 = new lib.no_effect();
	this.instance_47.setTransform(651.6,294.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_48 = new lib.no_effect();
	this.instance_48.setTransform(691.9,294.3,0.782,0.782,0,0,0,10.9,10.8);

	this.e131 = new lib.effect();
	this.e131.setTransform(732.7,254,0.655,0.655,0,0,0,13.1,13.1);

	this.e128 = new lib.effect();
	this.e128.setTransform(732.6,192.3,0.655,0.655,0,0,0,13,13.1);

	this.e127 = new lib.effect();
	this.e127.setTransform(732.6,171,0.655,0.655,0,0,0,13,12.5);

	this.e130 = new lib.effect();
	this.e130.setTransform(732.7,233.6,0.655,0.655,0,0,0,13.1,12.9);

	this.e129 = new lib.effect();
	this.e129.setTransform(732.6,213.2,0.655,0.655,0,0,0,13,13.3);

	this.e132 = new lib.effect();
	this.e132.setTransform(732.7,274.3,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_49 = new lib.no_effect();
	this.instance_49.setTransform(732.6,233.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_50 = new lib.no_effect();
	this.instance_50.setTransform(732.6,170.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_51 = new lib.no_effect();
	this.instance_51.setTransform(732.6,274.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_52 = new lib.no_effect();
	this.instance_52.setTransform(732.6,254,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_53 = new lib.no_effect();
	this.instance_53.setTransform(732.6,213.2,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_54 = new lib.no_effect();
	this.instance_54.setTransform(732.6,192.3,0.782,0.782,0,0,0,10.9,10.8);

	this.e125 = new lib.effect();
	this.e125.setTransform(712.6,254,0.655,0.655,0,0,0,13.1,13.1);

	this.e122 = new lib.effect();
	this.e122.setTransform(712.5,192.4,0.655,0.655,0,0,0,13,13.1);

	this.e121 = new lib.effect();
	this.e121.setTransform(712.6,171,0.655,0.655,0,0,0,13,12.5);

	this.e124 = new lib.effect();
	this.e124.setTransform(712.6,233.6,0.655,0.655,0,0,0,13.1,12.9);

	this.e123 = new lib.effect();
	this.e123.setTransform(712.6,213.3,0.655,0.655,0,0,0,13,13.3);

	this.e126 = new lib.effect();
	this.e126.setTransform(712.6,274.4,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_55 = new lib.no_effect();
	this.instance_55.setTransform(712.6,233.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_56 = new lib.no_effect();
	this.instance_56.setTransform(712.6,170.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_57 = new lib.no_effect();
	this.instance_57.setTransform(712.6,274.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_58 = new lib.no_effect();
	this.instance_58.setTransform(712.6,254.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_59 = new lib.no_effect();
	this.instance_59.setTransform(712.6,213.3,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_60 = new lib.no_effect();
	this.instance_60.setTransform(712.5,192.4,0.782,0.782,0,0,0,10.9,10.8);

	this.e116 = new lib.effect();
	this.e116.setTransform(295.2,354.3,0.655,0.655,0,0,0,13,12.9);

	this.e120 = new lib.effect();
	this.e120.setTransform(315.2,354,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_61 = new lib.no_effect();
	this.instance_61.setTransform(295.2,354.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_62 = new lib.no_effect();
	this.instance_62.setTransform(315.1,353.9,0.782,0.782,0,0,0,10.9,10.8);

	this.e108 = new lib.effect();
	this.e108.setTransform(254.5,354.2,0.655,0.655,0,0,0,13,12.9);

	this.e100 = new lib.effect();
	this.e100.setTransform(214,354.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e112 = new lib.effect();
	this.e112.setTransform(274.5,353.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e104 = new lib.effect();
	this.e104.setTransform(234.1,354.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e96 = new lib.effect();
	this.e96.setTransform(193.3,354.3,0.655,0.655,0,0,0,13,12.5);

	this.e88 = new lib.effect();
	this.e88.setTransform(152.9,354.2,0.655,0.655,0,0,0,13,12.9);

	this.e80 = new lib.effect();
	this.e80.setTransform(112.1,354.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e92 = new lib.effect();
	this.e92.setTransform(172.9,354.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e84 = new lib.effect();
	this.e84.setTransform(132.5,354.2,0.655,0.655,0,0,0,13,12.5);

	this.e76 = new lib.effect();
	this.e76.setTransform(91.9,354.3,0.655,0.655,0,0,0,13,12.5);

	this.instance_63 = new lib.no_effect();
	this.instance_63.setTransform(254.5,354.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_64 = new lib.no_effect();
	this.instance_64.setTransform(214,354.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_65 = new lib.no_effect();
	this.instance_65.setTransform(91.9,354.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_66 = new lib.no_effect();
	this.instance_66.setTransform(112.1,354.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_67 = new lib.no_effect();
	this.instance_67.setTransform(132.5,354.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_68 = new lib.no_effect();
	this.instance_68.setTransform(152.9,354.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_69 = new lib.no_effect();
	this.instance_69.setTransform(172.8,354.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_70 = new lib.no_effect();
	this.instance_70.setTransform(193.3,354.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_71 = new lib.no_effect();
	this.instance_71.setTransform(234.1,354.2,0.782,0.782,0,0,0,11,10.8);

	this.instance_72 = new lib.no_effect();
	this.instance_72.setTransform(274.4,353.7,0.782,0.782,0,0,0,10.9,10.8);

	this.e115 = new lib.effect();
	this.e115.setTransform(295.2,334.8,0.655,0.655,0,0,0,13,12.9);

	this.e119 = new lib.effect();
	this.e119.setTransform(315.2,334.5,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_73 = new lib.no_effect();
	this.instance_73.setTransform(295.2,334.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_74 = new lib.no_effect();
	this.instance_74.setTransform(315.1,334.4,0.782,0.782,0,0,0,10.9,10.8);

	this.e107 = new lib.effect();
	this.e107.setTransform(254.5,334.7,0.655,0.655,0,0,0,13,12.9);

	this.e99 = new lib.effect();
	this.e99.setTransform(214,334.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e111 = new lib.effect();
	this.e111.setTransform(274.5,334.3,0.655,0.655,0,0,0,13.1,12.5);

	this.e103 = new lib.effect();
	this.e103.setTransform(234.1,334.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e95 = new lib.effect();
	this.e95.setTransform(193.3,334.8,0.655,0.655,0,0,0,13,12.5);

	this.e87 = new lib.effect();
	this.e87.setTransform(152.9,334.7,0.655,0.655,0,0,0,13,12.9);

	this.e79 = new lib.effect();
	this.e79.setTransform(112.1,334.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e91 = new lib.effect();
	this.e91.setTransform(172.9,334.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e83 = new lib.effect();
	this.e83.setTransform(132.5,334.7,0.655,0.655,0,0,0,13,12.5);

	this.e75 = new lib.effect();
	this.e75.setTransform(91.9,334.8,0.655,0.655,0,0,0,13,12.5);

	this.instance_75 = new lib.no_effect();
	this.instance_75.setTransform(254.5,334.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_76 = new lib.no_effect();
	this.instance_76.setTransform(214,334.7,0.782,0.782,0,0,0,11,10.8);

	this.instance_77 = new lib.no_effect();
	this.instance_77.setTransform(91.9,334.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_78 = new lib.no_effect();
	this.instance_78.setTransform(112.1,334.7,0.782,0.782,0,0,0,11,10.8);

	this.instance_79 = new lib.no_effect();
	this.instance_79.setTransform(132.5,334.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_80 = new lib.no_effect();
	this.instance_80.setTransform(152.9,334.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_81 = new lib.no_effect();
	this.instance_81.setTransform(172.8,334.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_82 = new lib.no_effect();
	this.instance_82.setTransform(193.3,334.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_83 = new lib.no_effect();
	this.instance_83.setTransform(234.1,334.7,0.782,0.782,0,0,0,11,10.8);

	this.instance_84 = new lib.no_effect();
	this.instance_84.setTransform(274.4,334.2,0.782,0.782,0,0,0,10.9,10.8);

	this.e114 = new lib.effect();
	this.e114.setTransform(295.2,315.3,0.655,0.655,0,0,0,13,12.9);

	this.e118 = new lib.effect();
	this.e118.setTransform(315.2,314.9,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_85 = new lib.no_effect();
	this.instance_85.setTransform(295.2,315.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_86 = new lib.no_effect();
	this.instance_86.setTransform(315.1,314.8,0.782,0.782,0,0,0,10.9,10.8);

	this.e106 = new lib.effect();
	this.e106.setTransform(254.5,315.1,0.655,0.655,0,0,0,13,12.9);

	this.e98 = new lib.effect();
	this.e98.setTransform(214,315.2,0.655,0.655,0,0,0,13.1,12.5);

	this.e110 = new lib.effect();
	this.e110.setTransform(274.5,314.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e102 = new lib.effect();
	this.e102.setTransform(234.1,315.2,0.655,0.655,0,0,0,13.1,12.5);

	this.e94 = new lib.effect();
	this.e94.setTransform(193.3,315.2,0.655,0.655,0,0,0,13,12.5);

	this.e86 = new lib.effect();
	this.e86.setTransform(152.9,315.1,0.655,0.655,0,0,0,13,12.9);

	this.e78 = new lib.effect();
	this.e78.setTransform(112.1,315.2,0.655,0.655,0,0,0,13.1,12.5);

	this.e90 = new lib.effect();
	this.e90.setTransform(172.9,315.2,0.655,0.655,0,0,0,13.1,12.5);

	this.e82 = new lib.effect();
	this.e82.setTransform(132.5,315.1,0.655,0.655,0,0,0,13,12.5);

	this.e74 = new lib.effect();
	this.e74.setTransform(91.9,315.2,0.655,0.655,0,0,0,13,12.5);

	this.instance_87 = new lib.no_effect();
	this.instance_87.setTransform(254.5,315.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_88 = new lib.no_effect();
	this.instance_88.setTransform(214,315.1,0.782,0.782,0,0,0,11,10.8);

	this.instance_89 = new lib.no_effect();
	this.instance_89.setTransform(91.9,315.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_90 = new lib.no_effect();
	this.instance_90.setTransform(112.1,315.1,0.782,0.782,0,0,0,11,10.8);

	this.instance_91 = new lib.no_effect();
	this.instance_91.setTransform(132.5,315,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_92 = new lib.no_effect();
	this.instance_92.setTransform(152.9,315.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_93 = new lib.no_effect();
	this.instance_93.setTransform(172.8,315.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_94 = new lib.no_effect();
	this.instance_94.setTransform(193.3,315.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_95 = new lib.no_effect();
	this.instance_95.setTransform(234.1,315.1,0.782,0.782,0,0,0,11,10.8);

	this.instance_96 = new lib.no_effect();
	this.instance_96.setTransform(274.4,314.7,0.782,0.782,0,0,0,10.9,10.8);

	this.e113 = new lib.effect();
	this.e113.setTransform(295.1,296,0.655,0.655,0,0,0,13,12.9);

	this.e117 = new lib.effect();
	this.e117.setTransform(315.1,295.6,0.655,0.655,0,0,0,13.1,12.5);

	this.instance_97 = new lib.no_effect();
	this.instance_97.setTransform(295.1,296,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_98 = new lib.no_effect();
	this.instance_98.setTransform(315,295.5,0.782,0.782,0,0,0,10.9,10.8);

	this.e105 = new lib.effect();
	this.e105.setTransform(254.4,295.8,0.655,0.655,0,0,0,13,12.9);

	this.e97 = new lib.effect();
	this.e97.setTransform(213.9,295.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e109 = new lib.effect();
	this.e109.setTransform(274.4,295.5,0.655,0.655,0,0,0,13.1,12.5);

	this.e101 = new lib.effect();
	this.e101.setTransform(234,295.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e93 = new lib.effect();
	this.e93.setTransform(193.2,295.9,0.655,0.655,0,0,0,13,12.5);

	this.e85 = new lib.effect();
	this.e85.setTransform(152.8,295.8,0.655,0.655,0,0,0,13,12.9);

	this.e77 = new lib.effect();
	this.e77.setTransform(112,295.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e89 = new lib.effect();
	this.e89.setTransform(172.8,295.9,0.655,0.655,0,0,0,13.1,12.5);

	this.e81 = new lib.effect();
	this.e81.setTransform(132.4,295.8,0.655,0.655,0,0,0,13,12.5);

	this.e73 = new lib.effect();
	this.e73.setTransform(91.8,295.9,0.655,0.655,0,0,0,13,12.5);

	this.instance_99 = new lib.no_effect();
	this.instance_99.setTransform(254.4,295.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_100 = new lib.no_effect();
	this.instance_100.setTransform(213.9,295.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_101 = new lib.no_effect();
	this.instance_101.setTransform(91.8,295.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_102 = new lib.no_effect();
	this.instance_102.setTransform(112,295.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_103 = new lib.no_effect();
	this.instance_103.setTransform(132.4,295.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_104 = new lib.no_effect();
	this.instance_104.setTransform(152.8,295.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_105 = new lib.no_effect();
	this.instance_105.setTransform(172.7,295.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_106 = new lib.no_effect();
	this.instance_106.setTransform(193.2,295.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_107 = new lib.no_effect();
	this.instance_107.setTransform(234,295.8,0.782,0.782,0,0,0,11,10.8);

	this.instance_108 = new lib.no_effect();
	this.instance_108.setTransform(274.3,295.4,0.782,0.782,0,0,0,10.9,10.8);

	this.e71 = new lib.effect();
	this.e71.setTransform(315.1,255.4,0.655,0.655,0,0,0,13.1,13.1);

	this.e68 = new lib.effect();
	this.e68.setTransform(315,193.8,0.655,0.655,0,0,0,13,13.1);

	this.e67 = new lib.effect();
	this.e67.setTransform(315.1,172.4,0.655,0.655,0,0,0,13,12.5);

	this.e70 = new lib.effect();
	this.e70.setTransform(315.1,235,0.655,0.655,0,0,0,13.1,12.9);

	this.e66 = new lib.effect();
	this.e66.setTransform(295.2,276.1,0.655,0.655,0,0,0,13,12.9);

	this.e65 = new lib.effect();
	this.e65.setTransform(295.2,255.3,0.655,0.655,0,0,0,13,12.5);

	this.e62 = new lib.effect();
	this.e62.setTransform(295.2,193.4,0.655,0.655,0,0,0,13,12.5);

	this.e69 = new lib.effect();
	this.e69.setTransform(315.1,214.7,0.655,0.655,0,0,0,13,13.3);

	this.e64 = new lib.effect();
	this.e64.setTransform(295.2,235,0.655,0.655,0,0,0,13,13.4);

	this.e72 = new lib.effect();
	this.e72.setTransform(315.1,275.8,0.655,0.655,0,0,0,13.1,12.5);

	this.e61 = new lib.effect();
	this.e61.setTransform(295.2,172.5,0.655,0.655,0,0,0,13,12.9);

	this.e63 = new lib.effect();
	this.e63.setTransform(295.2,213.9,0.655,0.655,0,0,0,13,13.2);

	this.instance_109 = new lib.no_effect();
	this.instance_109.setTransform(315.1,235,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_110 = new lib.no_effect();
	this.instance_110.setTransform(295.2,276.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_111 = new lib.no_effect();
	this.instance_111.setTransform(315.1,172.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_112 = new lib.no_effect();
	this.instance_112.setTransform(295.2,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_113 = new lib.no_effect();
	this.instance_113.setTransform(295.2,193.3,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_114 = new lib.no_effect();
	this.instance_114.setTransform(315.1,275.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_115 = new lib.no_effect();
	this.instance_115.setTransform(315.1,255.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_116 = new lib.no_effect();
	this.instance_116.setTransform(295.2,255.2,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_117 = new lib.no_effect();
	this.instance_117.setTransform(295.2,235,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_118 = new lib.no_effect();
	this.instance_118.setTransform(315.1,214.7,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_119 = new lib.no_effect();
	this.instance_119.setTransform(315,193.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_120 = new lib.no_effect();
	this.instance_120.setTransform(295.2,172.5,0.782,0.782,0,0,0,10.9,10.8);

	this.e239 = new lib.effect();
	this.e239.setTransform(692.5,254.3,0.655,0.655,0,0,0,13.1,13.2);

	this.e236 = new lib.effect();
	this.e236.setTransform(692.5,192.6,0.655,0.655,0,0,0,13.1,13.1);

	this.e235 = new lib.effect();
	this.e235.setTransform(692.5,171.3,0.655,0.655,0,0,0,13,12.5);

	this.e238 = new lib.effect();
	this.e238.setTransform(692.5,233.9,0.655,0.655,0,0,0,13.1,12.9);

	this.e234 = new lib.effect();
	this.e234.setTransform(672.6,275,0.655,0.655,0,0,0,13,12.9);

	this.e233 = new lib.effect();
	this.e233.setTransform(672.6,254.2,0.655,0.655,0,0,0,13,12.5);

	this.e230 = new lib.effect();
	this.e230.setTransform(672.6,192.2,0.655,0.655,0,0,0,13,12.5);

	this.e226 = new lib.effect();
	this.e226.setTransform(652.1,233.9,0.655,0.655,0,0,0,12.9,12.5);

	this.e222 = new lib.effect();
	this.e222.setTransform(632,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e225 = new lib.effect();
	this.e225.setTransform(652.2,212.9,0.655,0.655,0,0,0,12.9,12.5);

	this.e221 = new lib.effect();
	this.e221.setTransform(632,254.3,0.655,0.655,0,0,0,13,12.9);

	this.e219 = new lib.effect();
	this.e219.setTransform(632,213,0.655,0.655,0,0,0,13,12.5);

	this.e214 = new lib.effect();
	this.e214.setTransform(611.3,233.9,0.655,0.655,0,0,0,13,13.6);

	this.e213 = new lib.effect();
	this.e213.setTransform(611.3,213,0.655,0.655,0,0,0,13,12.5);

	this.e212 = new lib.effect();
	this.e212.setTransform(611.3,192.5,0.655,0.655,0,0,0,13,12.5);

	this.e215 = new lib.effect();
	this.e215.setTransform(611.3,254.1,0.655,0.655,0,0,0,13,12.5);

	this.e237 = new lib.effect();
	this.e237.setTransform(692.5,213.6,0.655,0.655,0,0,0,13,13.4);

	this.e227 = new lib.effect();
	this.e227.setTransform(652.2,254.3,0.655,0.655,0,0,0,13,12.5);

	this.e232 = new lib.effect();
	this.e232.setTransform(672.6,233.8,0.655,0.655,0,0,0,13,13.4);

	this.e224 = new lib.effect();
	this.e224.setTransform(652.1,192.6,0.655,0.655,0,0,0,12.9,12.9);

	this.e220 = new lib.effect();
	this.e220.setTransform(632.1,233.9,0.655,0.655,0,0,0,13.1,13.1);

	this.e217 = new lib.effect();
	this.e217.setTransform(632,171.5,0.655,0.655,0,0,0,13,13.4);

	this.e223 = new lib.effect();
	this.e223.setTransform(652.2,171.5,0.655,0.655,0,0,0,13,13.4);

	this.e240 = new lib.effect();
	this.e240.setTransform(692.5,274.7,0.655,0.655,0,0,0,13.1,12.5);

	this.e228 = new lib.effect();
	this.e228.setTransform(652.1,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e229 = new lib.effect();
	this.e229.setTransform(672.6,171.4,0.655,0.655,0,0,0,13,13);

	this.e231 = new lib.effect();
	this.e231.setTransform(672.6,212.8,0.655,0.655,0,0,0,13,13.1);

	this.e218 = new lib.effect();
	this.e218.setTransform(632,192.4,0.655,0.655,0,0,0,13,12.6);

	this.e216 = new lib.effect();
	this.e216.setTransform(611.3,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e211 = new lib.effect();
	this.e211.setTransform(611.3,171.3,0.655,0.655,0,0,0,13,12.5);

	this.e209 = new lib.effect();
	this.e209.setTransform(590.9,254.2,0.655,0.655,0,0,0,13,13.2);

	this.e206 = new lib.effect();
	this.e206.setTransform(590.9,192.1,0.655,0.655,0,0,0,13,13.1);

	this.e205 = new lib.effect();
	this.e205.setTransform(590.9,171.5,0.655,0.655,0,0,0,13,12.5);

	this.e208 = new lib.effect();
	this.e208.setTransform(591,233.5,0.655,0.655,0,0,0,13.1,13);

	this.e204 = new lib.effect();
	this.e204.setTransform(571,275,0.655,0.655,0,0,0,13.1,12.9);

	this.e203 = new lib.effect();
	this.e203.setTransform(571,254.2,0.655,0.655,0,0,0,13,12.5);

	this.e200 = new lib.effect();
	this.e200.setTransform(571,192.7,0.655,0.655,0,0,0,13.1,12.5);

	this.e196 = new lib.effect();
	this.e196.setTransform(550.5,233.6,0.655,0.655,0,0,0,12.9,12.5);

	this.e192 = new lib.effect();
	this.e192.setTransform(530.1,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e195 = new lib.effect();
	this.e195.setTransform(550.5,212.9,0.655,0.655,0,0,0,12.9,12.5);

	this.e191 = new lib.effect();
	this.e191.setTransform(530.1,254.2,0.655,0.655,0,0,0,13,13);

	this.e189 = new lib.effect();
	this.e189.setTransform(530.1,213.6,0.655,0.655,0,0,0,13.1,12.5);

	this.e184 = new lib.effect();
	this.e184.setTransform(509.9,233.9,0.655,0.655,0,0,0,13,13.7);

	this.e183 = new lib.effect();
	this.e183.setTransform(509.9,213,0.655,0.655,0,0,0,13,12.5);

	this.e182 = new lib.effect();
	this.e182.setTransform(509.9,192.7,0.655,0.655,0,0,0,13,12.5);

	this.e185 = new lib.effect();
	this.e185.setTransform(509.9,254.3,0.655,0.655,0,0,0,13,12.5);

	this.e207 = new lib.effect();
	this.e207.setTransform(590.9,212.5,0.655,0.655,0,0,0,13,13.3);

	this.e197 = new lib.effect();
	this.e197.setTransform(550.5,254.3,0.655,0.655,0,0,0,13,12.5);

	this.e202 = new lib.effect();
	this.e202.setTransform(571,233.7,0.655,0.655,0,0,0,13,13.4);

	this.e194 = new lib.effect();
	this.e194.setTransform(550.5,192.6,0.655,0.655,0,0,0,12.9,12.9);

	this.e190 = new lib.effect();
	this.e190.setTransform(530.1,233.9,0.655,0.655,0,0,0,13.1,13.1);

	this.e187 = new lib.effect();
	this.e187.setTransform(530.1,172.2,0.655,0.655,0,0,0,13,13.4);

	this.e193 = new lib.effect();
	this.e193.setTransform(550.5,172.2,0.655,0.655,0,0,0,13,13.4);

	this.e210 = new lib.effect();
	this.e210.setTransform(590.9,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e198 = new lib.effect();
	this.e198.setTransform(550.5,275,0.655,0.655,0,0,0,13,12.5);

	this.e199 = new lib.effect();
	this.e199.setTransform(571,171.2,0.655,0.655,0,0,0,13,12.9);

	this.e201 = new lib.effect();
	this.e201.setTransform(571,213.5,0.655,0.655,0,0,0,13.1,13.1);

	this.e188 = new lib.effect();
	this.e188.setTransform(530.1,192.6,0.655,0.655,0,0,0,13.1,12.7);

	this.e186 = new lib.effect();
	this.e186.setTransform(509.9,275.1,0.655,0.655,0,0,0,13,12.5);

	this.e181 = new lib.effect();
	this.e181.setTransform(509.9,171.7,0.655,0.655,0,0,0,13,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHApIAAgQIAOAAIAAAQgAgHgYIAAgQIAOAAIAAAQg");
	this.shape_12.setTransform(474.5,395.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_13.setTransform(467.8,395.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAqAqIAAgyQAAgIgCgFQgBgDgEgCQgDgCgFAAQgJgBgGAGQgFAGAAANIAAAuIgMAAIAAg0QAAgKgEgEQgDgFgIABQgGAAgFADQgFACgCAHQgDAFAAALIAAAqIgOAAIAAhRIANAAIAAAMQAEgHAGgDQAHgEAIAAQAJAAAGAEQAEAEACAHQAKgPAQAAQAMAAAHAHQAHAHAAAOIAAA3g");
	this.shape_14.setTransform(456.7,395.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA5IAAhRIANAAIAABRgAgGgoIAAgQIANAAIAAAQg");
	this.shape_15.setTransform(448.2,394);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA1QgEgCgCgDQgCgFAAgMIAAguIgKAAIAAgLIAKAAIAAgVIAMgIIAAAdIAPAAIAAALIgPAAIAAAvQAAAFABACQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABIAHgBIACANIgLABQgIAAgCgDg");
	this.shape_16.setTransform(444.3,394.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAgQgLgMAAgUQAAgTALgMQALgLAPAAQARAAAKALQALAMAAATIAAADIg8AAQAAAOAHAHQAHAIAJAAQAHgBAGgEQAFgEAEgIIAOABQgDANgKAHQgJAHgOAAQgRAAgKgLgAgOgYQgHAGgBALIAtAAQgBgKgFgFQgGgJgLAAQgIAAgGAHg");
	this.shape_17.setTransform(433.1,395.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAqIAAhRIANAAIAAANQAFgJADgDQADgDAFAAQAGAAAIAFIgFAMQgFgCgFAAQgFAAgCACQgDADgCAFQgCAHAAAJIAAAqg");
	this.shape_18.setTransform(426.6,395.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAnQgHgCgDgFQgDgEgBgGIgBgOIAAgxIAOAAIAAAsIABAPQABAFAFADQAEAEAGAAQAEAAAGgEQAGgCACgHQACgFAAgLIAAgqIAOAAIAABRIgMAAIAAgMQgKAOgPAAQgHAAgGgDg");
	this.shape_19.setTransform(418.8,395.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWAkQgIgHgDgNIAOgCQABAIAGAFQAEAFAJAAQAJgBAEgEQAFgDABgGQAAgFgFgDQgDgCgLgCQgNgEgHgCQgGgCgDgFQgCgFAAgGQgBgFADgFQADgFAEgDQADgDAGgBQAFgCAHAAQAHAAAIADQAHADAEAEQADAGACAIIgOACQgBgHgEgDQgFgEgHgBQgJAAgEAEQgEADAAAFIACAEIAFAEIALADQAOAFAHADQAFAAAEAFQADAEAAAIQAAAGgEAHQgEAGgIADQgIAEgJAAQgPAAgIgHg");
	this.shape_20.setTransform(410.4,395.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgWAMgLQALgJAOAAQARAAAKALQALALAAAUQAAAOgEAKQgFAIgJAGQgKAFgKAAQgQAAgLgLgAgQgXQgHAJAAAOQAAAPAHAJQAHAHAJABQAKgBAHgHQAHgIAAgQQAAgPgHgHQgHgIgKAAQgJAAgHAHg");
	this.shape_21.setTransform(401.9,395.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjA6IAAhxIAOAAIAAALQAEgGAFgDQAGgEAHAAQAKAAAIAGQAJAFADAKQAEAKAAAMQABAMgFAJQgEAKgJAFQgJAGgJAAQgFAAgGgDQgGgDgEgEIAAAogAgPgmQgGAJAAAQQAAAOAGAIQAHAHAIABQAIgBAGgHQAHgIAAgPQAAgQgHgIQgGgIgIAAQgIAAgHAIg");
	this.shape_22.setTransform(393.3,397.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVApIgRgaIgEgHIgUAhIgSAAIAfgpIgcgoIARAAIAOAUIAEAJIAFgJIAPgUIAQAAIgdAnIAgAqg");
	this.shape_23.setTransform(384.6,395.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpA5IAAhxIBRAAIAAAOIhCAAIAAAjIA9AAIAAALIg9AAIAAAnIBEAAIAAAOg");
	this.shape_24.setTransform(375.5,394);

	this.clock = new cjs.Text("_ _ hrs", "18px 'Arial'");
	this.clock.name = "clock";
	this.clock.lineHeight = 22;
	this.clock.lineWidth = 62;
	this.clock.setTransform(387,411.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape_25.setTransform(728.9,140.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_26.setTransform(721.3,140.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_27.setTransform(714.3,138.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_28.setTransform(707.6,142.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_29.setTransform(694.9,140.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_30.setTransform(682.3,140.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(672.8,140.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_32.setTransform(661.3,138.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_33.setTransform(654.3,140.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_34.setTransform(647.1,140.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_35.setTransform(640.9,138.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_36.setTransform(633.3,140.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_37.setTransform(623.3,140.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_38.setTransform(614.1,140.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_39.setTransform(599,138.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_40.setTransform(589.3,140.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_41.setTransform(581.9,138.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_42.setTransform(574.3,140.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_43.setTransform(564.3,140.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_44.setTransform(557.4,138.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_45.setTransform(551.1,140.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_46.setTransform(542.1,140.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_47.setTransform(532.3,140.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_48.setTransform(522.9,140.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_49.setTransform(513.3,140.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_50.setTransform(501.8,138.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape_51.setTransform(232.6,140.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_52.setTransform(225,140.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_53.setTransform(218,138.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_54.setTransform(211.3,142.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_55.setTransform(198.5,140.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_56.setTransform(186,140.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_57.setTransform(176.4,140.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_58.setTransform(161.7,138.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_59.setTransform(152,140.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_60.setTransform(144.6,138.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_61.setTransform(137,140.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_62.setTransform(127,140.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_63.setTransform(120,138.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_64.setTransform(113.8,140.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_65.setTransform(104.8,140.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_66.setTransform(95,140.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_67.setTransform(84,138.7);

	this.e59 = new lib.effect();
	this.e59.setTransform(274.4,255.3,0.655,0.655,0,0,0,13.1,13.1);

	this.e56 = new lib.effect();
	this.e56.setTransform(274.3,193.6,0.655,0.655,0,0,0,13,13.1);

	this.e55 = new lib.effect();
	this.e55.setTransform(274.4,172.3,0.655,0.655,0,0,0,13,12.5);

	this.e58 = new lib.effect();
	this.e58.setTransform(274.4,234.9,0.655,0.655,0,0,0,13.1,12.9);

	this.e54 = new lib.effect();
	this.e54.setTransform(254.5,276,0.655,0.655,0,0,0,13,12.9);

	this.e53 = new lib.effect();
	this.e53.setTransform(254.5,255.1,0.655,0.655,0,0,0,13,12.5);

	this.e50 = new lib.effect();
	this.e50.setTransform(254.5,193.2,0.655,0.655,0,0,0,13,12.5);

	this.e46 = new lib.effect();
	this.e46.setTransform(234,234.9,0.655,0.655,0,0,0,13,12.5);

	this.e42 = new lib.effect();
	this.e42.setTransform(214,276.1,0.655,0.655,0,0,0,13.1,12.5);

	this.e45 = new lib.effect();
	this.e45.setTransform(234,213.9,0.655,0.655,0,0,0,12.9,12.5);

	this.e41 = new lib.effect();
	this.e41.setTransform(213.9,255.3,0.655,0.655,0,0,0,13,12.9);

	this.e39 = new lib.effect();
	this.e39.setTransform(213.9,214,0.655,0.655,0,0,0,13.1,12.5);

	this.e34 = new lib.effect();
	this.e34.setTransform(193.2,234.9,0.655,0.655,0,0,0,13,13.7);

	this.e33 = new lib.effect();
	this.e33.setTransform(193.2,214,0.655,0.655,0,0,0,13,12.5);

	this.e32 = new lib.effect();
	this.e32.setTransform(193.2,193.4,0.655,0.655,0,0,0,13,12.5);

	this.e35 = new lib.effect();
	this.e35.setTransform(193.2,255.1,0.655,0.655,0,0,0,13,12.5);

	this.e57 = new lib.effect();
	this.e57.setTransform(274.4,214.5,0.655,0.655,0,0,0,13,13.3);

	this.e47 = new lib.effect();
	this.e47.setTransform(234,255.3,0.655,0.655,0,0,0,13,12.5);

	this.e52 = new lib.effect();
	this.e52.setTransform(254.5,234.8,0.655,0.655,0,0,0,13,13.4);

	this.e44 = new lib.effect();
	this.e44.setTransform(234,193.5,0.655,0.655,0,0,0,13,12.9);

	this.e40 = new lib.effect();
	this.e40.setTransform(214,234.9,0.655,0.655,0,0,0,13.1,13.1);

	this.e37 = new lib.effect();
	this.e37.setTransform(214,172.4,0.655,0.655,0,0,0,13.1,13.3);

	this.e43 = new lib.effect();
	this.e43.setTransform(234,172.4,0.655,0.655,0,0,0,13,13.3);

	this.e60 = new lib.effect();
	this.e60.setTransform(274.4,275.6,0.655,0.655,0,0,0,13.1,12.5);

	this.e48 = new lib.effect();
	this.e48.setTransform(234.1,276.1,0.655,0.655,0,0,0,13.1,12.5);

	this.e49 = new lib.effect();
	this.e49.setTransform(254.5,172.4,0.655,0.655,0,0,0,13,12.9);

	this.e51 = new lib.effect();
	this.e51.setTransform(254.5,213.8,0.655,0.655,0,0,0,13,13.2);

	this.e38 = new lib.effect();
	this.e38.setTransform(213.9,193.4,0.655,0.655,0,0,0,13.1,12.7);

	this.e36 = new lib.effect();
	this.e36.setTransform(193.2,276.1,0.655,0.655,0,0,0,13,12.5);

	this.e31 = new lib.effect();
	this.e31.setTransform(193.2,173.1,0.655,0.655,0,0,0,13,12.5);

	this.e29 = new lib.effect();
	this.e29.setTransform(172.8,255.1,0.655,0.655,0,0,0,13.1,13.1);

	this.e26 = new lib.effect();
	this.e26.setTransform(172.8,193.1,0.655,0.655,0,0,0,13,13.2);

	this.e25 = new lib.effect();
	this.e25.setTransform(172.9,172.4,0.655,0.655,0,0,0,13.1,12.5);

	this.e28 = new lib.effect();
	this.e28.setTransform(172.9,234.5,0.655,0.655,0,0,0,13.1,12.9);

	this.e24 = new lib.effect();
	this.e24.setTransform(152.8,276,0.655,0.655,0,0,0,13,12.9);

	this.e23 = new lib.effect();
	this.e23.setTransform(152.9,255.1,0.655,0.655,0,0,0,13,12.5);

	this.e20 = new lib.effect();
	this.e20.setTransform(152.8,193.6,0.655,0.655,0,0,0,13,12.5);

	this.e16 = new lib.effect();
	this.e16.setTransform(132.4,234.5,0.655,0.655,0,0,0,13,12.5);

	this.e12 = new lib.effect();
	this.e12.setTransform(112,276.1,0.655,0.655,0,0,0,13.1,12.5);

	this.e15 = new lib.effect();
	this.e15.setTransform(132.4,213.9,0.655,0.655,0,0,0,13,12.5);

	this.e11 = new lib.effect();
	this.e11.setTransform(112,255.1,0.655,0.655,0,0,0,13.1,12.9);

	this.e9 = new lib.effect();
	this.e9.setTransform(112,214.6,0.655,0.655,0,0,0,13.1,12.5);

	this.e4 = new lib.effect();
	this.e4.setTransform(91.8,234.8,0.655,0.655,0,0,0,13,13.6);

	this.e3 = new lib.effect();
	this.e3.setTransform(91.8,214,0.655,0.655,0,0,0,13,12.5);

	this.e2 = new lib.effect();
	this.e2.setTransform(91.8,193.6,0.655,0.655,0,0,0,13,12.5);

	this.e5 = new lib.effect();
	this.e5.setTransform(91.8,255.3,0.655,0.655,0,0,0,13,12.5);

	this.e27 = new lib.effect();
	this.e27.setTransform(172.8,213.6,0.655,0.655,0,0,0,13,13.4);

	this.e17 = new lib.effect();
	this.e17.setTransform(132.4,255.3,0.655,0.655,0,0,0,13,12.5);

	this.e22 = new lib.effect();
	this.e22.setTransform(152.9,234.6,0.655,0.655,0,0,0,13,13.3);

	this.e14 = new lib.effect();
	this.e14.setTransform(132.4,193.6,0.655,0.655,0,0,0,13,12.9);

	this.e10 = new lib.effect();
	this.e10.setTransform(112,234.9,0.655,0.655,0,0,0,13.1,13.1);

	this.e7 = new lib.effect();
	this.e7.setTransform(112,173.1,0.655,0.655,0,0,0,13.1,13.3);

	this.e13 = new lib.effect();
	this.e13.setTransform(132.4,173.1,0.655,0.655,0,0,0,13,13.3);

	this.e30 = new lib.effect();
	this.e30.setTransform(172.8,276.1,0.655,0.655,0,0,0,13.1,12.5);

	this.e18 = new lib.effect();
	this.e18.setTransform(132.4,276,0.655,0.655,0,0,0,13,12.5);

	this.e19 = new lib.effect();
	this.e19.setTransform(152.9,172.2,0.655,0.655,0,0,0,13,12.9);

	this.e21 = new lib.effect();
	this.e21.setTransform(152.8,214.5,0.655,0.655,0,0,0,13,13.2);

	this.e8 = new lib.effect();
	this.e8.setTransform(112,193.6,0.655,0.655,0,0,0,13.1,12.6);

	this.e6 = new lib.effect();
	this.e6.setTransform(91.8,276.1,0.655,0.655,0,0,0,13,12.5);

	this.e1 = new lib.effect();
	this.e1.setTransform(91.8,172.7,0.655,0.655,0,0,0,13,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e1},{t:this.e6},{t:this.e8},{t:this.e21},{t:this.e19},{t:this.e18},{t:this.e30},{t:this.e13},{t:this.e7},{t:this.e10},{t:this.e14},{t:this.e22},{t:this.e17},{t:this.e27},{t:this.e5},{t:this.e2},{t:this.e3},{t:this.e4},{t:this.e9},{t:this.e11},{t:this.e15},{t:this.e12},{t:this.e16},{t:this.e20},{t:this.e23},{t:this.e24},{t:this.e28},{t:this.e25},{t:this.e26},{t:this.e29},{t:this.e31},{t:this.e36},{t:this.e38},{t:this.e51},{t:this.e49},{t:this.e48},{t:this.e60},{t:this.e43},{t:this.e37},{t:this.e40},{t:this.e44},{t:this.e52},{t:this.e47},{t:this.e57},{t:this.e35},{t:this.e32},{t:this.e33},{t:this.e34},{t:this.e39},{t:this.e41},{t:this.e45},{t:this.e42},{t:this.e46},{t:this.e50},{t:this.e53},{t:this.e54},{t:this.e58},{t:this.e55},{t:this.e56},{t:this.e59},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.clock},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.e181},{t:this.e186},{t:this.e188},{t:this.e201},{t:this.e199},{t:this.e198},{t:this.e210},{t:this.e193},{t:this.e187},{t:this.e190},{t:this.e194},{t:this.e202},{t:this.e197},{t:this.e207},{t:this.e185},{t:this.e182},{t:this.e183},{t:this.e184},{t:this.e189},{t:this.e191},{t:this.e195},{t:this.e192},{t:this.e196},{t:this.e200},{t:this.e203},{t:this.e204},{t:this.e208},{t:this.e205},{t:this.e206},{t:this.e209},{t:this.e211},{t:this.e216},{t:this.e218},{t:this.e231},{t:this.e229},{t:this.e228},{t:this.e240},{t:this.e223},{t:this.e217},{t:this.e220},{t:this.e224},{t:this.e232},{t:this.e227},{t:this.e237},{t:this.e215},{t:this.e212},{t:this.e213},{t:this.e214},{t:this.e219},{t:this.e221},{t:this.e225},{t:this.e222},{t:this.e226},{t:this.e230},{t:this.e233},{t:this.e234},{t:this.e238},{t:this.e235},{t:this.e236},{t:this.e239},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.e63},{t:this.e61},{t:this.e72},{t:this.e64},{t:this.e69},{t:this.e62},{t:this.e65},{t:this.e66},{t:this.e70},{t:this.e67},{t:this.e68},{t:this.e71},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.e73},{t:this.e81},{t:this.e89},{t:this.e77},{t:this.e85},{t:this.e93},{t:this.e101},{t:this.e109},{t:this.e97},{t:this.e105},{t:this.instance_98},{t:this.instance_97},{t:this.e117},{t:this.e113},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.e74},{t:this.e82},{t:this.e90},{t:this.e78},{t:this.e86},{t:this.e94},{t:this.e102},{t:this.e110},{t:this.e98},{t:this.e106},{t:this.instance_86},{t:this.instance_85},{t:this.e118},{t:this.e114},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.e75},{t:this.e83},{t:this.e91},{t:this.e79},{t:this.e87},{t:this.e95},{t:this.e103},{t:this.e111},{t:this.e99},{t:this.e107},{t:this.instance_74},{t:this.instance_73},{t:this.e119},{t:this.e115},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.e76},{t:this.e84},{t:this.e92},{t:this.e80},{t:this.e88},{t:this.e96},{t:this.e104},{t:this.e112},{t:this.e100},{t:this.e108},{t:this.instance_62},{t:this.instance_61},{t:this.e120},{t:this.e116},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.e126},{t:this.e123},{t:this.e124},{t:this.e121},{t:this.e122},{t:this.e125},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.e132},{t:this.e129},{t:this.e130},{t:this.e127},{t:this.e128},{t:this.e131},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.e133},{t:this.e141},{t:this.e149},{t:this.e137},{t:this.e145},{t:this.e153},{t:this.e161},{t:this.e169},{t:this.e157},{t:this.e165},{t:this.instance_38},{t:this.instance_37},{t:this.e177},{t:this.e173},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.e134},{t:this.e142},{t:this.e150},{t:this.e138},{t:this.e146},{t:this.e154},{t:this.e162},{t:this.e170},{t:this.e158},{t:this.e166},{t:this.instance_26},{t:this.instance_25},{t:this.e178},{t:this.e174},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.e135},{t:this.e143},{t:this.e151},{t:this.e139},{t:this.e147},{t:this.e155},{t:this.e163},{t:this.e171},{t:this.e159},{t:this.e167},{t:this.instance_14},{t:this.instance_13},{t:this.e179},{t:this.e175},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.e136},{t:this.e144},{t:this.e152},{t:this.e140},{t:this.e148},{t:this.e156},{t:this.e164},{t:this.e172},{t:this.e160},{t:this.e168},{t:this.instance_2},{t:this.instance_1},{t:this.e180},{t:this.e176}]}).wait(1));

	// Ebene 3
	this.instance_121 = new lib.no_effect();
	this.instance_121.setTransform(274.4,234.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_122 = new lib.no_effect();
	this.instance_122.setTransform(254.5,276,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_123 = new lib.no_effect();
	this.instance_123.setTransform(214,234.9,0.782,0.782,0,0,0,11,10.8);

	this.instance_124 = new lib.no_effect();
	this.instance_124.setTransform(214,276,0.782,0.782,0,0,0,11,10.8);

	this.instance_125 = new lib.no_effect();
	this.instance_125.setTransform(274.4,172.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_126 = new lib.no_effect();
	this.instance_126.setTransform(234,255.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_127 = new lib.no_effect();
	this.instance_127.setTransform(172.9,234.5,0.782,0.782,0,0,0,11,10.8);

	this.instance_128 = new lib.no_effect();
	this.instance_128.setTransform(234,172.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_129 = new lib.no_effect();
	this.instance_129.setTransform(91.8,276,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_130 = new lib.no_effect();
	this.instance_130.setTransform(112,276,0.782,0.782,0,0,0,11,10.8);

	this.instance_131 = new lib.no_effect();
	this.instance_131.setTransform(254.5,213.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_132 = new lib.no_effect();
	this.instance_132.setTransform(254.5,193.2,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_133 = new lib.no_effect();
	this.instance_133.setTransform(152.9,255.1,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_134 = new lib.no_effect();
	this.instance_134.setTransform(152.9,234.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_135 = new lib.no_effect();
	this.instance_135.setTransform(213.9,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_136 = new lib.no_effect();
	this.instance_136.setTransform(213.9,193.4,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_137 = new lib.no_effect();
	this.instance_137.setTransform(172.8,213.6,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_138 = new lib.no_effect();
	this.instance_138.setTransform(172.8,193,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_139 = new lib.no_effect();
	this.instance_139.setTransform(193.2,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_140 = new lib.no_effect();
	this.instance_140.setTransform(193.2,193.4,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_141 = new lib.no_effect();
	this.instance_141.setTransform(91.8,234.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_142 = new lib.no_effect();
	this.instance_142.setTransform(91.8,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_143 = new lib.no_effect();
	this.instance_143.setTransform(132.4,275.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_144 = new lib.no_effect();
	this.instance_144.setTransform(132.4,255.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_145 = new lib.no_effect();
	this.instance_145.setTransform(132.4,234.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_146 = new lib.no_effect();
	this.instance_146.setTransform(132.4,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_147 = new lib.no_effect();
	this.instance_147.setTransform(132.4,193.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_148 = new lib.no_effect();
	this.instance_148.setTransform(132.4,173.1,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_149 = new lib.no_effect();
	this.instance_149.setTransform(112,193.6,0.782,0.782,0,0,0,11,10.8);

	this.instance_150 = new lib.no_effect();
	this.instance_150.setTransform(112,173.1,0.782,0.782,0,0,0,11,10.9);

	this.instance_151 = new lib.no_effect();
	this.instance_151.setTransform(152.8,276,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_152 = new lib.no_effect();
	this.instance_152.setTransform(172.8,276,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_153 = new lib.no_effect();
	this.instance_153.setTransform(193.2,276,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_154 = new lib.no_effect();
	this.instance_154.setTransform(234.1,276,0.782,0.782,0,0,0,11,10.8);

	this.instance_155 = new lib.no_effect();
	this.instance_155.setTransform(274.4,275.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_156 = new lib.no_effect();
	this.instance_156.setTransform(274.4,255.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_157 = new lib.no_effect();
	this.instance_157.setTransform(254.5,255.1,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_158 = new lib.no_effect();
	this.instance_158.setTransform(254.5,234.8,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_159 = new lib.no_effect();
	this.instance_159.setTransform(234.1,234.8,0.782,0.782,0,0,0,11,10.9);

	this.instance_160 = new lib.no_effect();
	this.instance_160.setTransform(213.9,255.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_161 = new lib.no_effect();
	this.instance_161.setTransform(193.2,255.1,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_162 = new lib.no_effect();
	this.instance_162.setTransform(172.8,255.1,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_163 = new lib.no_effect();
	this.instance_163.setTransform(193.2,234.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_164 = new lib.no_effect();
	this.instance_164.setTransform(152.8,193.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_165 = new lib.no_effect();
	this.instance_165.setTransform(152.8,214.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_166 = new lib.no_effect();
	this.instance_166.setTransform(234,213.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_167 = new lib.no_effect();
	this.instance_167.setTransform(274.4,214.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_168 = new lib.no_effect();
	this.instance_168.setTransform(274.3,193.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_169 = new lib.no_effect();
	this.instance_169.setTransform(234.1,193.5,0.782,0.782,0,0,0,11,10.8);

	this.instance_170 = new lib.no_effect();
	this.instance_170.setTransform(254.5,172.4,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_171 = new lib.no_effect();
	this.instance_171.setTransform(214,172.4,0.782,0.782,0,0,0,11,10.8);

	this.instance_172 = new lib.no_effect();
	this.instance_172.setTransform(193.2,173,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_173 = new lib.no_effect();
	this.instance_173.setTransform(172.9,172.4,0.782,0.782,0,0,0,11,10.8);

	this.instance_174 = new lib.no_effect();
	this.instance_174.setTransform(152.9,172.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_175 = new lib.no_effect();
	this.instance_175.setTransform(112,255.1,0.782,0.782,0,0,0,11,10.8);

	this.instance_176 = new lib.no_effect();
	this.instance_176.setTransform(112,234.9,0.782,0.782,0,0,0,11,10.8);

	this.instance_177 = new lib.no_effect();
	this.instance_177.setTransform(112,214.5,0.782,0.782,0,0,0,11,10.9);

	this.instance_178 = new lib.no_effect();
	this.instance_178.setTransform(91.8,255.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_179 = new lib.no_effect();
	this.instance_179.setTransform(91.8,193.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_180 = new lib.no_effect();
	this.instance_180.setTransform(91.8,173,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_181 = new lib.no_effect();
	this.instance_181.setTransform(692.5,233.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_182 = new lib.no_effect();
	this.instance_182.setTransform(672.6,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_183 = new lib.no_effect();
	this.instance_183.setTransform(632,233.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_184 = new lib.no_effect();
	this.instance_184.setTransform(632,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_185 = new lib.no_effect();
	this.instance_185.setTransform(692.5,171.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_186 = new lib.no_effect();
	this.instance_186.setTransform(652.2,254.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_187 = new lib.no_effect();
	this.instance_187.setTransform(590.9,233.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_188 = new lib.no_effect();
	this.instance_188.setTransform(652.2,171.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_189 = new lib.no_effect();
	this.instance_189.setTransform(509.9,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_190 = new lib.no_effect();
	this.instance_190.setTransform(530.1,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_191 = new lib.no_effect();
	this.instance_191.setTransform(672.6,212.7,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_192 = new lib.no_effect();
	this.instance_192.setTransform(672.6,192.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_193 = new lib.no_effect();
	this.instance_193.setTransform(571,254.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_194 = new lib.no_effect();
	this.instance_194.setTransform(571,233.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_195 = new lib.no_effect();
	this.instance_195.setTransform(632,212.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_196 = new lib.no_effect();
	this.instance_196.setTransform(632,192.4,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_197 = new lib.no_effect();
	this.instance_197.setTransform(590.9,211.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_198 = new lib.no_effect();
	this.instance_198.setTransform(590.9,191.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_199 = new lib.no_effect();
	this.instance_199.setTransform(611.3,212.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_200 = new lib.no_effect();
	this.instance_200.setTransform(611.3,192.4,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_201 = new lib.no_effect();
	this.instance_201.setTransform(509.9,233.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_202 = new lib.no_effect();
	this.instance_202.setTransform(509.9,212.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_203 = new lib.no_effect();
	this.instance_203.setTransform(550.5,274.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_204 = new lib.no_effect();
	this.instance_204.setTransform(550.5,254.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_205 = new lib.no_effect();
	this.instance_205.setTransform(550.5,233.5,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_206 = new lib.no_effect();
	this.instance_206.setTransform(550.5,212.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_207 = new lib.no_effect();
	this.instance_207.setTransform(550.5,192.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_208 = new lib.no_effect();
	this.instance_208.setTransform(550.5,172.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_209 = new lib.no_effect();
	this.instance_209.setTransform(530.1,192.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_210 = new lib.no_effect();
	this.instance_210.setTransform(530.1,172.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_211 = new lib.no_effect();
	this.instance_211.setTransform(571,275,0.782,0.782,0,0,0,11,10.8);

	this.instance_212 = new lib.no_effect();
	this.instance_212.setTransform(590.9,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_213 = new lib.no_effect();
	this.instance_213.setTransform(611.3,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_214 = new lib.no_effect();
	this.instance_214.setTransform(652.1,275,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_215 = new lib.no_effect();
	this.instance_215.setTransform(692.5,274.6,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_216 = new lib.no_effect();
	this.instance_216.setTransform(692.5,254.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_217 = new lib.no_effect();
	this.instance_217.setTransform(672.6,254.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_218 = new lib.no_effect();
	this.instance_218.setTransform(672.6,233.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_219 = new lib.no_effect();
	this.instance_219.setTransform(652.1,233.8,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_220 = new lib.no_effect();
	this.instance_220.setTransform(632,254.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_221 = new lib.no_effect();
	this.instance_221.setTransform(611.3,254.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_222 = new lib.no_effect();
	this.instance_222.setTransform(590.9,254.1,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_223 = new lib.no_effect();
	this.instance_223.setTransform(611.3,233.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_224 = new lib.no_effect();
	this.instance_224.setTransform(571,192.6,0.782,0.782,0,0,0,11,10.8);

	this.instance_225 = new lib.no_effect();
	this.instance_225.setTransform(571,213.5,0.782,0.782,0,0,0,11,10.8);

	this.instance_226 = new lib.no_effect();
	this.instance_226.setTransform(652.2,212.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_227 = new lib.no_effect();
	this.instance_227.setTransform(692.5,213.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_228 = new lib.no_effect();
	this.instance_228.setTransform(692.5,192.6,0.782,0.782,0,0,0,11,10.8);

	this.instance_229 = new lib.no_effect();
	this.instance_229.setTransform(652.1,192.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_230 = new lib.no_effect();
	this.instance_230.setTransform(672.6,171.4,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_231 = new lib.no_effect();
	this.instance_231.setTransform(632,171.4,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_232 = new lib.no_effect();
	this.instance_232.setTransform(611.3,171.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_233 = new lib.no_effect();
	this.instance_233.setTransform(590.9,171.4,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_234 = new lib.no_effect();
	this.instance_234.setTransform(571,171.2,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_235 = new lib.no_effect();
	this.instance_235.setTransform(530.1,254.2,0.782,0.782,0,0,0,10.9,10.9);

	this.instance_236 = new lib.no_effect();
	this.instance_236.setTransform(530.1,233.9,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_237 = new lib.no_effect();
	this.instance_237.setTransform(530.1,213.5,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_238 = new lib.no_effect();
	this.instance_238.setTransform(509.9,254.3,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_239 = new lib.no_effect();
	this.instance_239.setTransform(509.9,192.6,0.782,0.782,0,0,0,10.9,10.8);

	this.instance_240 = new lib.no_effect();
	this.instance_240.setTransform(509.9,172,0.782,0.782,0,0,0,10.9,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121}]}).wait(1));

	// Ebene 2
	this.filling = new lib.filling();
	this.filling.setTransform(421.7,289.7,1,1,0,0,0,345.7,89.7);

	this.timeline.addTween(cjs.Tween.get(this.filling).wait(1));

	// Ebene 1
	this.pipette_empty2 = new lib.pipette_1();
	this.pipette_empty2.setTransform(456.4,262.4,1,1,0,0,0,27.1,44.5);

	this.pipette_empty = new lib.pipette_1();
	this.pipette_empty.setTransform(39.4,256.7,1,1,0,0,0,27.1,44.5);

	this.btn_reset = new lib.tubedoublered();
	this.btn_reset.setTransform(400,609.4);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2, false, new lib.tubedoublered(), 3);

	this.pipette2 = new lib.pipette();
	this.pipette2.setTransform(452.9,261.8,0.835,0.836,0,0,0,40,59.3);

	this.pipette = new lib.pipette();
	this.pipette.setTransform(35.4,255.6,0.835,0.836,0,0,0,40,59.3);

	this.btn_start = new lib.tubedoublegreen();
	this.btn_start.setTransform(400,609.4);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.tubedoublegreen(), 3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AMsxLMAn2AAAMAAAAiXMgn2AAAgEg0hgRLMAn2AAAMAAAAiXMgn2AAAg");
	this.shape_68.setTransform(412.3,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.btn_start},{t:this.pipette},{t:this.pipette2},{t:this.btn_reset},{t:this.pipette_empty},{t:this.pipette_empty2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(402,318.6,787.8,620.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;