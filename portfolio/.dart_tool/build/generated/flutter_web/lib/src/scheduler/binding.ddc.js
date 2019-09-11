define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/collection/src/priority_queue', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web_ui/ui', 'packages/flutter_web/services'], function(dart_sdk, packages__flutter_web__src__foundation__assertions, packages__collection__src__priority_queue, packages__flutter_web__src__services__clipboard, packages__flutter_web_ui__ui, packages__flutter_web__services) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const assertions = packages__flutter_web__src__foundation__assertions.src__foundation__assertions;
  const diagnostics = packages__flutter_web__src__foundation__assertions.src__foundation__diagnostics;
  const print = packages__flutter_web__src__foundation__assertions.src__foundation__print;
  const debug = packages__flutter_web__src__foundation__assertions.src__foundation__debug;
  const binding = packages__flutter_web__src__foundation__assertions.src__foundation__binding;
  const priority_queue = packages__collection__src__priority_queue.src__priority_queue;
  const system_channels = packages__flutter_web__src__services__clipboard.src__services__system_channels;
  const ui = packages__flutter_web_ui__ui.ui;
  const binding$ = packages__flutter_web__services.src__services__binding;
  const debug$ = Object.create(dart.library);
  const priority$ = Object.create(dart.library);
  const binding$0 = Object.create(dart.library);
  const $abs = dartx.abs;
  const $sign = dartx.sign;
  const $compareTo = dartx.compareTo;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $trimRight = dartx.trimRight;
  const $split = dartx.split;
  const $join = dartx.join;
  const $add = dartx.add;
  const $round = dartx.round;
  const $toString = dartx.toString;
  const $padRight = dartx.padRight;
  const $padLeft = dartx.padLeft;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $times = dartx['*'];
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let __Tobool = () => (__Tobool = dart.constFn(dart.fnType(core.bool, [], {priority: core.int, scheduler: binding$0.SchedulerBinding})))();
  let HeapPriorityQueueOf_TaskEntry = () => (HeapPriorityQueueOf_TaskEntry = dart.constFn(priority_queue.HeapPriorityQueue$(binding$0._TaskEntry)))();
  let _TaskEntryAnd_TaskEntryToint = () => (_TaskEntryAnd_TaskEntryToint = dart.constFn(dart.fnType(core.int, [binding$0._TaskEntry, binding$0._TaskEntry])))();
  let IdentityMapOfint$_FrameCallbackEntry = () => (IdentityMapOfint$_FrameCallbackEntry = dart.constFn(_js_helper.IdentityMap$(core.int, binding$0._FrameCallbackEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  let JSArrayOfDurationTovoid = () => (JSArrayOfDurationTovoid = dart.constFn(_interceptors.JSArray$(DurationTovoid())))();
  let FutureOfdouble = () => (FutureOfdouble = dart.constFn(async.Future$(core.double)))();
  let VoidToFutureOfdouble = () => (VoidToFutureOfdouble = dart.constFn(dart.fnType(FutureOfdouble(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let doubleToFutureOfNull = () => (doubleToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.double])))();
  let SyncIterableOfDiagnosticsStackTrace = () => (SyncIterableOfDiagnosticsStackTrace = dart.constFn(_js_helper.SyncIterable$(assertions.DiagnosticsStackTrace)))();
  let IterableOfDiagnosticsStackTrace = () => (IterableOfDiagnosticsStackTrace = dart.constFn(core.Iterable$(assertions.DiagnosticsStackTrace)))();
  let VoidToIterableOfDiagnosticsStackTrace = () => (VoidToIterableOfDiagnosticsStackTrace = dart.constFn(dart.fnType(IterableOfDiagnosticsStackTrace(), [])))();
  let LinkedHashMapOfint$_FrameCallbackEntry = () => (LinkedHashMapOfint$_FrameCallbackEntry = dart.constFn(collection.LinkedHashMap$(core.int, binding$0._FrameCallbackEntry)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let intAnd_FrameCallbackEntryToNull = () => (intAnd_FrameCallbackEntryToNull = dart.constFn(dart.fnType(core.Null, [core.int, binding$0._FrameCallbackEntry])))();
  let ListOfDurationTovoid = () => (ListOfDurationTovoid = dart.constFn(core.List$(DurationTovoid())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 100000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: priority$.Priority.prototype,
        [_value$]: 200000
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.idle",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.transientCallbacks",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.midFrameMicrotasks",
        index: 2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.persistentCallbacks",
        index: 3
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: binding$0.SchedulerPhase.prototype,
        [_name$]: "SchedulerPhase.postFrameCallbacks",
        index: 4
      });
    },
    get C8() {
      return C8 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], binding$0.SchedulerPhase);
    },
    get C9() {
      return C9 = dart.fn(binding$0.defaultSchedulingStrategy, __Tobool());
    },
    get C10() {
      return C10 = dart.fn(binding$0.SchedulerBinding._taskSorter, _TaskEntryAnd_TaskEntryToint());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.resumed",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.inactive",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.paused",
        index: 2
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui.AppLifecycleState.prototype,
        [_name]: "AppLifecycleState.suspending",
        index: 3
      });
    }
  });
  debug$.debugAssertAllSchedulerVarsUnset = function debugAssertAllSchedulerVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
        dart.throw(assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/debug.dart", 62, 10, "() {\r\n    if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\r\n      throw new FlutterError(reason);\r\n    }\r\n    return true;\r\n  }()");
    return true;
  };
  dart.defineLazy(debug$, {
    /*debug$.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*debug$.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*debug$.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  });
  const _value$ = dart.privateName(priority$, "_value");
  let C0;
  let C1;
  let C2;
  priority$.Priority = class Priority extends core.Object {
    get value() {
      return this[_value$];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new priority$.Priority.__(dart.notNull(this[_value$]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (priority$.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = priority$.Priority.prototype;
  dart.addTypeTests(priority$.Priority);
  dart.setMethodSignature(priority$.Priority, () => ({
    __proto__: dart.getMethods(priority$.Priority.__proto__),
    '+': dart.fnType(priority$.Priority, [core.int]),
    '-': dart.fnType(priority$.Priority, [core.int])
  }));
  dart.setGetterSignature(priority$.Priority, () => ({
    __proto__: dart.getGetters(priority$.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(priority$.Priority, "package:flutter_web/src/scheduler/priority.dart");
  dart.setFieldSignature(priority$.Priority, () => ({
    __proto__: dart.getFields(priority$.Priority.__proto__),
    [_value$]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(priority$.Priority, {
    /*priority$.Priority.idle*/get idle() {
      return C0 || CT.C0;
    },
    /*priority$.Priority.animation*/get animation() {
      return C1 || CT.C1;
    },
    /*priority$.Priority.touch*/get touch() {
      return C2 || CT.C2;
    },
    /*priority$.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  });
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  binding$0._TaskEntry$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    class _TaskEntry extends core.Object {
      get completer() {
        return this[completer];
      }
      set completer(value) {
        this[completer] = CompleterOfT()._check(value);
      }
      run() {
        let t0;
        if (!false) {
          developer.Timeline.timeSync(core.Null, (t0 = this.debugLabel, t0 == null ? "Scheduled Task" : t0), dart.fn(() => {
            this.completer.complete(this.task());
          }, VoidToNull()), {flow: this.flow != null ? developer.Flow.step(this.flow.id) : null});
        } else {
          this.completer.complete(this.task());
        }
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      this.debugStack = null;
      this[completer] = null;
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.test(dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 65, 12, "() {\r\n      debugStack = StackTrace.current;\r\n      return true;\r\n    }()");
      this.completer = CompleterOfT().new();
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    const completer = Symbol("_TaskEntry.completer");
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_TaskEntry, "package:flutter_web/src/scheduler/binding.dart");
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(dart.fnType(T, [])),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(core.String),
      flow: dart.finalFieldType(developer.Flow),
      debugStack: dart.fieldType(core.StackTrace),
      completer: dart.fieldType(async.Completer$(T))
    }));
    return _TaskEntry;
  });
  binding$0._TaskEntry = binding$0._TaskEntry$();
  dart.addTypeTests(binding$0._TaskEntry, _is__TaskEntry_default);
  binding$0._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {};
  (binding$0._FrameCallbackEntry.new = function(callback, opts) {
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    this.debugStack = null;
    this.callback = callback;
    if (!dart.test(dart.fn(() => {
      if (dart.test(rescheduling)) {
        if (!dart.test(dart.fn(() => {
          if (binding$0._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(assertions.FlutterError.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope.\n" + "The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous. " + "If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 98, 16, "() {\r\n          if (debugCurrentCallbackStack == null) {\r\n            throw FlutterError(\r\n                'scheduleFrameCallback called with rescheduling true, but no callback is in scope.\\n'\r\n                'The \"rescheduling\" argument should only be set to true if the '\r\n                'callback is being reregistered from within the callback itself, '\r\n                'and only then if the callback itself is entirely synchronous. '\r\n                'If this is the initial registration of the callback, or if the '\r\n                'callback is asynchronous, then do not use the \"rescheduling\" '\r\n                'argument.');\r\n          }\r\n          return true;\r\n        }()");
        this.debugStack = binding$0._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 96, 12, "() {\r\n      if (rescheduling) {\r\n        assert(() {\r\n          if (debugCurrentCallbackStack == null) {\r\n            throw FlutterError(\r\n                'scheduleFrameCallback called with rescheduling true, but no callback is in scope.\\n'\r\n                'The \"rescheduling\" argument should only be set to true if the '\r\n                'callback is being reregistered from within the callback itself, '\r\n                'and only then if the callback itself is entirely synchronous. '\r\n                'If this is the initial registration of the callback, or if the '\r\n                'callback is asynchronous, then do not use the \"rescheduling\" '\r\n                'argument.');\r\n          }\r\n          return true;\r\n        }());\r\n        debugStack = debugCurrentCallbackStack;\r\n      } else {\r\n        // TODO(ianh): trim the frames from this library, so that the call to scheduleFrameCallback is the top one\r\n        debugStack = StackTrace.current;\r\n      }\r\n      return true;\r\n    }()");
  }).prototype = binding$0._FrameCallbackEntry.prototype;
  dart.addTypeTests(binding$0._FrameCallbackEntry);
  dart.setLibraryUri(binding$0._FrameCallbackEntry, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(binding$0._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(binding$0._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    debugStack: dart.fieldType(core.StackTrace)
  }));
  dart.defineLazy(binding$0._FrameCallbackEntry, {
    /*binding$0._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  });
  const _name$ = dart.privateName(binding$0, "_name");
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  binding$0.SchedulerPhase = class SchedulerPhase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (binding$0.SchedulerPhase.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = binding$0.SchedulerPhase.prototype;
  dart.addTypeTests(binding$0.SchedulerPhase);
  dart.setLibraryUri(binding$0.SchedulerPhase, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(binding$0.SchedulerPhase, () => ({
    __proto__: dart.getFields(binding$0.SchedulerPhase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(binding$0.SchedulerPhase, ['toString']);
  binding$0.SchedulerPhase.idle = C3 || CT.C3;
  binding$0.SchedulerPhase.transientCallbacks = C4 || CT.C4;
  binding$0.SchedulerPhase.midFrameMicrotasks = C5 || CT.C5;
  binding$0.SchedulerPhase.persistentCallbacks = C6 || CT.C6;
  binding$0.SchedulerPhase.postFrameCallbacks = C7 || CT.C7;
  binding$0.SchedulerPhase.values = C8 || CT.C8;
  const _lifecycleState = dart.privateName(binding$0, "_lifecycleState");
  let C9;
  const _taskQueue = dart.privateName(binding$0, "_taskQueue");
  let C10;
  const _hasRequestedAnEventLoopCallback = dart.privateName(binding$0, "_hasRequestedAnEventLoopCallback");
  const _nextFrameCallbackId = dart.privateName(binding$0, "_nextFrameCallbackId");
  const _transientCallbacks = dart.privateName(binding$0, "_transientCallbacks");
  const _removedIds = dart.privateName(binding$0, "_removedIds");
  const _persistentCallbacks = dart.privateName(binding$0, "_persistentCallbacks");
  const _postFrameCallbacks = dart.privateName(binding$0, "_postFrameCallbacks");
  const _nextFrameCompleter = dart.privateName(binding$0, "_nextFrameCompleter");
  const _hasScheduledFrame = dart.privateName(binding$0, "_hasScheduledFrame");
  const _schedulerPhase = dart.privateName(binding$0, "_schedulerPhase");
  const _framesEnabled = dart.privateName(binding$0, "_framesEnabled");
  const _warmUpFrame = dart.privateName(binding$0, "_warmUpFrame");
  const _firstRawTimeStampInEpoch = dart.privateName(binding$0, "_firstRawTimeStampInEpoch");
  const _epochStart = dart.privateName(binding$0, "_epochStart");
  const _lastRawTimeStamp = dart.privateName(binding$0, "_lastRawTimeStamp");
  const _currentFrameTimeStamp = dart.privateName(binding$0, "_currentFrameTimeStamp");
  const _profileFrameNumber = dart.privateName(binding$0, "_profileFrameNumber");
  const _profileFrameStopwatch = dart.privateName(binding$0, "_profileFrameStopwatch");
  const _debugBanner = dart.privateName(binding$0, "_debugBanner");
  const _ignoreNextEngineDrawFrame = dart.privateName(binding$0, "_ignoreNextEngineDrawFrame");
  const _handleBeginFrame = dart.privateName(binding$0, "_handleBeginFrame");
  const _handleDrawFrame = dart.privateName(binding$0, "_handleDrawFrame");
  const _handleLifecycleMessage = dart.privateName(binding$0, "_handleLifecycleMessage");
  const _setFramesEnabledState = dart.privateName(binding$0, "_setFramesEnabledState");
  const _name = dart.privateName(ui, "_name");
  let C11;
  let C12;
  let C13;
  let C14;
  const _ensureEventLoopCallback = dart.privateName(binding$0, "_ensureEventLoopCallback");
  const _runTasks = dart.privateName(binding$0, "_runTasks");
  const _adjustForEpoch = dart.privateName(binding$0, "_adjustForEpoch");
  const _invokeFrameCallback = dart.privateName(binding$0, "_invokeFrameCallback");
  const _profileFramePostEvent = dart.privateName(binding$0, "_profileFramePostEvent");
  binding$0.SchedulerBinding = class SchedulerBinding extends core.Object {
    static get instance() {
      return binding$0.SchedulerBinding._instance;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.suspending":
        {
          return ui.AppLifecycleState.suspending;
        }
      }
      return null;
    }
    static _taskSorter(e1, e2) {
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.test(dart.fn(() => {
        if (binding$0._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          print.debugPrint("When the current transient callback was registered, this was the stack:");
          print.debugPrint(assertions.FlutterError.defaultStackFilter(dart.toString(binding$0._FrameCallbackEntry.debugCurrentCallbackStack)[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 547, 12, " assert(() {\r\n      if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {\r\n        debugPrint(\r\n            'When the current transient callback was registered, this was the stack:');\r\n        debugPrint(FlutterError.defaultStackFilter(_FrameCallbackEntry\r\n                .debugCurrentCallbackStack\r\n                .toString()\r\n                .trimRight()\r\n                .split('\\n'))\r\n            .join('\\n'));\r\n      } else {\r\n        debugPrint('No transient callback is currently executing.');\r\n      }\r\n      return true;\r");
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (dart.notNull(timeStamp.inDays) > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (dart.notNull(timeStamp.inHours) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inHours) - dart.notNull(timeStamp.inDays) * 24) + "h ");
      if (dart.notNull(timeStamp.inMinutes) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inMinutes) - dart.notNull(timeStamp.inHours) * 60) + "m ");
      if (dart.notNull(timeStamp.inSeconds) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inSeconds) - dart.notNull(timeStamp.inMinutes) * 60) + "s ");
      buffer.write(dart.str(dart.notNull(timeStamp.inMilliseconds) - dart.notNull(timeStamp.inSeconds) * 1000));
      let microseconds = dart.notNull(timeStamp.inMicroseconds) - dart.notNull(timeStamp.inMilliseconds) * 1000;
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  binding$0.SchedulerBinding[dart.mixinOn] = _SchedulerBinding$BindingBase$ServicesBinding => class SchedulerBinding extends _SchedulerBinding$BindingBase$ServicesBinding {
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    initInstances() {
      super.initInstances();
      binding$0.SchedulerBinding._instance = this;
      this.window.onBeginFrame = dart.bind(this, _handleBeginFrame);
      this.window.onDrawFrame = dart.bind(this, _handleDrawFrame);
      system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      this.readInitialLifecycleStateFromNativeWindow();
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!false) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return binding$0.timeDilation;
          }), VoidToFutureOfdouble()), setter: dart.fn(value => async.async(core.Null, function*() {
            binding$0.timeDilation = value;
          }), doubleToFutureOfNull())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this[_lifecycleState] == null && binding$0.SchedulerBinding._parseAppLifecycleMessage(this.window.initialLifecycleState) != null) {
        this[_handleLifecycleMessage](this.window.initialLifecycleState);
      }
    }
    handleAppLifecycleStateChanged(state) {
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 262, 12, "state != null");
      this[_lifecycleState] = state;
      switch (state) {
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case C13 || CT.C13:
        case C14 || CT.C14:
        {
          this[_setFramesEnabledState](false);
          break;
        }
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(core.String, (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(binding$0.SchedulerBinding._parseAppLifecycleMessage(message));
        return null;
      }).bind(this));
    }
    scheduleTask(T, task, priority, opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (binding$0._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (dart.test(isFirstTask) && !dart.test(this.locked)) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (dart.test(this[_taskQueue].isNotEmpty)) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 355, 12, "!locked");
      if (!dart.test(this[_taskQueue].isNotEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 356, 12, "_taskQueue.isNotEmpty");
      if (dart.test(this[_hasRequestedAnEventLoopCallback])) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (dart.test(this.handleEventLoopCallback())) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      if (dart.test(this[_taskQueue].isEmpty) || dart.test(this.locked)) return false;
      let entry = this[_taskQueue].first;
      if (dart.test(this.schedulingStrategy({priority: entry.priority, scheduler: this}))) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          let callbackStack = null;
          if (!dart.test(dart.fn(() => {
            callbackStack = entry.debugStack;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 389, 16, "() {\r\n          callbackStack = entry.debugStack;\r\n          return true;\r\n        }()");
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a task callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsStackTrace()).new(function*() {
              yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
            }), VoidToIterableOfDiagnosticsStackTrace())}));
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      this.scheduleFrame();
      this[_nextFrameCallbackId] = dart.notNull(this[_nextFrameCallbackId]) + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new binding$0._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (!(dart.notNull(id) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 466, 12, "id > 0");
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.transientCallbackCount) > 0) {
          let count = this.transientCallbackCount;
          let callbacks = LinkedHashMapOfint$_FrameCallbackEntry().from(this[_transientCallbacks]);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
              if (count === 1) {
                yield new assertions.ErrorDescription.new("There was one transient callback left. " + "The stack trace for when it was registered is as follows:");
              } else {
                yield new assertions.ErrorDescription.new("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:");
              }
              for (let id of callbacks[$keys]) {
                let entry = callbacks[$_get](id);
                yield new assertions.DiagnosticsStackTrace.new("── callback " + dart.str(id) + " ──", entry.debugStack, {showSeparator: false});
              }
            }), VoidToIterableOfDiagnosticsNode())}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 492, 12, "() {\r\n      if (transientCallbackCount > 0) {\r\n        // We cache the values so that we can produce them later\r\n        // even if the information collector is called after\r\n        // the problem has been resolved.\r\n        final int count = transientCallbackCount;\r\n        final Map<int, _FrameCallbackEntry> callbacks =\r\n            Map<int, _FrameCallbackEntry>.from(_transientCallbacks);\r\n        FlutterError.reportError(FlutterErrorDetails(\r\n          exception: reason,\r\n          library: 'scheduler library',\r\n          informationCollector: () sync* {\r\n            if (count == 1) {\r\n              // TODO(jacobr): I have added an extra line break in this case.\r\n              yield ErrorDescription('There was one transient callback left. '\r\n                  'The stack trace for when it was registered is as follows:');\r\n            } else {\r\n              yield ErrorDescription(\r\n                  'There were $count transient callbacks left. '\r\n                  'The stack traces for when they were registered are as follows:');\r\n            }\r\n            for (int id in callbacks.keys) {\r\n              final _FrameCallbackEntry entry = callbacks[id];\r\n              yield DiagnosticsStackTrace(\r\n                  '── callback $id ──', entry.debugStack,\r\n                  showSeparator: false);\r\n            }\r\n          },\r\n        ));\r\n      }\r\n      return true;\r");
      return true;
    }
    addPersistentFrameCallback(callback) {
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) this.scheduleFrame();
        this[_nextFrameCompleter] = CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          this[_nextFrameCompleter].complete();
          this[_nextFrameCompleter] = null;
        }, DurationToNull()));
      }
      return this[_nextFrameCompleter].future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (dart.equals(this[_framesEnabled], enabled)) return;
      this[_framesEnabled] = enabled;
      if (dart.test(enabled)) this.scheduleFrame();
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case C3 || CT.C3:
        case C7 || CT.C7:
        {
          this.scheduleFrame();
          return;
        }
        case C4 || CT.C4:
        case C5 || CT.C5:
        case C6 || CT.C6:
        {
          return;
        }
      }
    }
    scheduleFrame() {
      if (dart.test(this[_hasScheduledFrame]) || !dart.test(this[_framesEnabled])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 706, 12, " assert(() {\r\n      if (debugPrintScheduleFrameStacks)\r\n        debugPrintStack(\r\n            label: 'scheduleFrame() called. Current phase is $schedulerPhase.');\r\n      return true;\r");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (dart.test(this[_hasScheduledFrame])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintScheduleFrameStacks)) assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 737, 12, " assert(() {\r\n      if (debugPrintScheduleFrameStacks)\r\n        debugPrintStack(\r\n            label:\r\n                'scheduleForcedFrame() called. Current phase is $schedulerPhase.');\r\n      return true;\r");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      if (dart.test(this[_warmUpFrame]) || !dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) return;
      this[_warmUpFrame] = true;
      developer.Timeline.startSync("Warm-up frame");
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 773, 14, " assert(_war");
        this.handleBeginFrame(null);
      }, VoidToNull()));
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 777, 14, " assert(_war");
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (dart.test(hadScheduledFrame)) this.scheduleFrame();
      }, VoidToNull()));
      this.lockEvents(dart.fn(() => async.async(core.Null, (function*() {
        yield this.endOfFrame;
        developer.Timeline.finishSync();
      }).bind(this)), VoidToFutureOfNull()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](this[_firstRawTimeStampInEpoch]);
      return new core.Duration.new({microseconds: (dart.notNull(rawDurationSinceEpoch.inMicroseconds) / dart.notNull(binding$0.timeDilation))[$round]() + dart.notNull(this[_epochStart].inMicroseconds)});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 849, 12, " assert(_currentFrameTimeStamp");
      return this[_currentFrameTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (dart.test(this[_warmUpFrame])) {
        if (!!dart.test(this[_ignoreNextEngineDrawFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 862, 14, " assert(!_ignoreNextEngineD");
        this[_ignoreNextEngineDrawFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (dart.test(this[_ignoreNextEngineDrawFrame])) {
        this[_ignoreNextEngineDrawFrame] = false;
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      let t1;
      developer.Timeline.startSync("Frame", {arguments: debug.timelineWhitelistArguments});
      this[_firstRawTimeStampInEpoch] == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : null;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch]((t1 = rawTimeStamp, t1 == null ? this[_lastRawTimeStamp] : t1));
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      if (!false) {
        this[_profileFrameNumber] = dart.notNull(this[_profileFrameNumber]) + 1;
        this[_profileFrameStopwatch].reset();
        this[_profileFrameStopwatch].start();
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug$.debugPrintBeginFrameBanner) || dart.test(debug$.debugPrintEndFrameBanner)) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            binding$0.SchedulerBinding._debugDescribeTimeStamp(this[_currentFrameTimeStamp], frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "▄▄▄▄▄▄▄▄ Frame " + dart.toString(this[_profileFrameNumber])[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ▄▄▄▄▄▄▄▄";
          if (dart.test(debug$.debugPrintBeginFrameBanner)) print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 912, 12, " assert(() {\r\n      if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\r\n        final StringBuffer frameTimeStampDescription = StringBuffer();\r\n        if (rawTimeStamp != null) {\r\n          _debugDescribeTimeStamp(\r\n              _currentFrameTimeStamp, frameTimeStampDescription);\r\n        } else {\r\n          frameTimeStampDescription.write('(warm-up frame)');\r\n        }\r\n        _debugBanner =\r\n            '▄▄▄▄▄▄▄▄ Frame ${_profileFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ▄▄▄▄▄▄▄▄';\r\n        if (debugPrintBeginFrameBanner) debugPrint(_debugBanner");
      if (!dart.equals(this.schedulerPhase, binding$0.SchedulerPhase.idle)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 928, 12, "  return true;\r\n    }());\r\n\r\n    asse");
      this[_hasScheduledFrame] = false;
      try {
        developer.Timeline.startSync("Animate", {arguments: debug.timelineWhitelistArguments});
        this[_schedulerPhase] = binding$0.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (!dart.test(this[_removedIds].contains(id))) this[_invokeFrameCallback](callbackEntry.callback, this[_currentFrameTimeStamp], callbackEntry.debugStack);
        }, intAnd_FrameCallbackEntryToNull()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = binding$0.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      if (!dart.equals(this[_schedulerPhase], binding$0.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 957, 12, "\n  void handleDrawFrame() {\r\n    assert(_schedulerPh");
      developer.Timeline.finishSync();
      try {
        this[_schedulerPhase] = binding$0.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
        this[_schedulerPhase] = binding$0.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = ListOfDurationTovoid().from(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
      } finally {
        this[_schedulerPhase] = binding$0.SchedulerPhase.idle;
        developer.Timeline.finishSync();
        if (!false) {
          this[_profileFrameStopwatch].stop();
          this[_profileFramePostEvent]();
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug$.debugPrintEndFrameBanner)) print.debugPrint("▀"[$times](this[_debugBanner].length));
          this[_debugBanner] = null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 979, 14, "ramePostEvent();\r\n      }\r\n      assert(() {\r\n        if (debugPrintEndFrameBanner) debugPrint('▀' * _debugBanner.length);\r\n        _debugBanne");
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent]() {
      developer.postEvent("Flutter.Frame", new (IdentityMapOfString$dynamic()).from(["number", this[_profileFrameNumber], "startTime", this[_currentFrameTimeStamp].inMicroseconds, "elapsed", this[_profileFrameStopwatch].elapsedMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack) {
      if (callbackStack === void 0) callbackStack = null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1023, 12, "[StackTrace call");
      if (!(binding$0._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1024, 12, "    assert(callback != null);\r\n    assert(_FrameCallb");
      if (!dart.test(dart.fn(() => {
        binding$0._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1025, 12, "urrentCallbackStack == null);\r\n    assert(() {\r\n      _FrameCallbackEntry.debugCurrentCallbackStack = c");
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new assertions.ErrorDescription.new("during a scheduler callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsStackTrace()).new(function*() {
            yield new assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
          }), VoidToIterableOfDiagnosticsStackTrace())}));
      }
      if (!dart.test(dart.fn(() => {
        binding$0._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1049, 12, "         },\r\n      ));\r\n    }\r\n    assert(() {\r\n      _FrameCallbackEntry.debugCurrentCallback");
    }
  };
  (binding$0.SchedulerBinding[dart.mixinNew] = function() {
    this[_lifecycleState] = null;
    this[schedulingStrategy] = C9 || CT.C9;
    this[_taskQueue] = new (HeapPriorityQueueOf_TaskEntry()).new(C10 || CT.C10);
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
    this[_removedIds] = new (_IdentityHashSetOfint()).new();
    this[_persistentCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_postFrameCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = binding$0.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_profileFrameNumber] = 0;
    this[_profileFrameStopwatch] = new core.Stopwatch.new();
    this[_debugBanner] = null;
    this[_ignoreNextEngineDrawFrame] = false;
  }).prototype = binding$0.SchedulerBinding.prototype;
  dart.addTypeTests(binding$0.SchedulerBinding);
  const schedulingStrategy = Symbol("SchedulerBinding.schedulingStrategy");
  binding$0.SchedulerBinding[dart.implements] = () => [binding$.ServicesBinding, binding.BindingBase];
  dart.setMethodSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getMethods(binding$0.SchedulerBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui.AppLifecycleState]),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(core.String), [core.String]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), priority$.Priority], {debugLabel: core.String, flow: developer.Flow}]),
    unlocked: dart.fnType(dart.void, []),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [core.Duration]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, []),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [core.StackTrace])
  }));
  dart.setGetterSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getGetters(binding$0.SchedulerBinding.__proto__),
    lifecycleState: ui.AppLifecycleState,
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: binding$0.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration
  }));
  dart.setLibraryUri(binding$0.SchedulerBinding, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(binding$0.SchedulerBinding, () => ({
    __proto__: dart.getFields(binding$0.SchedulerBinding.__proto__),
    [_lifecycleState]: dart.fieldType(ui.AppLifecycleState),
    schedulingStrategy: dart.fieldType(dart.fnType(core.bool, [], {priority: core.int, scheduler: binding$0.SchedulerBinding})),
    [_taskQueue]: dart.finalFieldType(priority_queue.PriorityQueue$(binding$0._TaskEntry)),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(core.Map$(core.int, binding$0._FrameCallbackEntry)),
    [_removedIds]: dart.finalFieldType(core.Set$(core.int)),
    [_persistentCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_postFrameCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_nextFrameCompleter]: dart.fieldType(async.Completer$(dart.void)),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(binding$0.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(core.Duration),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(core.Duration),
    [_profileFrameNumber]: dart.fieldType(core.int),
    [_profileFrameStopwatch]: dart.finalFieldType(core.Stopwatch),
    [_debugBanner]: dart.fieldType(core.String),
    [_ignoreNextEngineDrawFrame]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(binding$0.SchedulerBinding, {
    /*binding$0.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  binding$0.defaultSchedulingStrategy = function defaultSchedulingStrategy(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (dart.notNull(scheduler.transientCallbackCount) > 0) return dart.notNull(priority) >= dart.notNull(priority$.Priority.animation.value);
    return true;
  };
  dart.copyProperties(binding$0, {
    get timeDilation() {
      return binding$0._timeDilation;
    },
    set timeDilation(value) {
      let t2;
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 29, 10, "value > 0.0");
      if (binding$0._timeDilation == value) return;
      t2 = binding$0.SchedulerBinding.instance;
      t2 == null ? null : t2.resetEpoch();
      binding$0._timeDilation = value;
    }
  });
  dart.defineLazy(binding$0, {
    /*binding$0._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  });
  dart.trackLibraries("packages/flutter_web/src/scheduler/binding", {
    "package:flutter_web/src/scheduler/debug.dart": debug$,
    "package:flutter_web/src/scheduler/priority.dart": priority$,
    "package:flutter_web/src/scheduler/binding.dart": binding$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","priority.dart","binding.dart"],"names":[],"mappings":"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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__scheduler__debug: debug$,
    src__scheduler__priority: priority$,
    src__scheduler__binding: binding$0
  };
});

//# sourceMappingURL=binding.ddc.js.map
