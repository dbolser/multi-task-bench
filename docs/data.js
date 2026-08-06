window.MTB_DATA = {
 "commit": "11c03fa",
 "runs": [
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9526813880126183,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9526813880126183,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 23.4,
   "task_error_dist": {
    "0": 2,
    "1": 2,
    "2": 5,
    "3+": 1
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9723320158102767,
     "n": 253
    },
    "branch": {
     "acc": 0.9545454545454546,
     "n": 44
    },
    "done": {
     "acc": 0.4,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9795918367346939,
     "n": 49
    },
    "16-31": {
     "acc": 0.8918918918918919,
     "n": 37
    },
    "2-3": {
     "acc": 0.9491525423728814,
     "n": 59
    },
    "32+": {
     "acc": 1.0,
     "n": 9
    },
    "4-7": {
     "acc": 0.9746835443037974,
     "n": 79
    },
    "8-15": {
     "acc": 0.9404761904761905,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.952076677316294,
     "n": 313
    },
    "8-16k": {
     "acc": 1.0,
     "n": 4
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9463722397476341,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9463722397476341,
   "task_completion_rate": 0.3,
   "mean_first_error_depth": 24.9,
   "task_error_dist": {
    "0": 3,
    "1": 2,
    "2": 3,
    "3+": 2
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9486166007905138,
     "n": 253
    },
    "branch": {
     "acc": 1.0,
     "n": 44
    },
    "done": {
     "acc": 0.6,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.925,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.9390243902439024,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.9620253164556962,
     "n": 79
    },
    "8-15": {
     "acc": 0.9411764705882353,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9519230769230769,
     "n": 312
    },
    "8-16k": {
     "acc": 0.6,
     "n": 5
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.87751677852349,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.87751677852349,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 14.45,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 2,
    "3+": 16
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9145299145299145,
     "n": 468
    },
    "branch": {
     "acc": 0.8409090909090909,
     "n": 88
    },
    "done": {
     "acc": 0.05,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8947368421052632,
     "n": 76
    },
    "16-31": {
     "acc": 0.928,
     "n": 125
    },
    "2-3": {
     "acc": 0.8125,
     "n": 80
    },
    "32+": {
     "acc": 0.8795180722891566,
     "n": 83
    },
    "4-7": {
     "acc": 0.898989898989899,
     "n": 99
    },
    "8-15": {
     "acc": 0.8421052631578947,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.87751677852349,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.889261744966443,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.889261744966443,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 18.25,
   "task_error_dist": {
    "0": 0,
    "1": 6,
    "2": 1,
    "3+": 13
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9316239316239316,
     "n": 468
    },
    "branch": {
     "acc": 0.8409090909090909,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9263157894736842,
     "n": 95
    },
    "16-31": {
     "acc": 0.8795180722891566,
     "n": 83
    },
    "2-3": {
     "acc": 0.8425925925925926,
     "n": 108
    },
    "32+": {
     "acc": 0.9354838709677419,
     "n": 62
    },
    "4-7": {
     "acc": 0.9212598425196851,
     "n": 127
    },
    "8-15": {
     "acc": 0.8512396694214877,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.889261744966443,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8452380952380952,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8452380952380952,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.7,
   "task_error_dist": {
    "0": 0,
    "1": 3,
    "2": 3,
    "3+": 24
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.8973277074542897,
     "n": 711
    },
    "branch": {
     "acc": 0.738562091503268,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9137931034482759,
     "n": 58
    },
    "16-31": {
     "acc": 0.8535564853556485,
     "n": 239
    },
    "2-3": {
     "acc": 0.7790697674418605,
     "n": 86
    },
    "32+": {
     "acc": 0.8391304347826087,
     "n": 230
    },
    "4-7": {
     "acc": 0.8173913043478261,
     "n": 115
    },
    "8-15": {
     "acc": 0.8673469387755102,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8452380952380952,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8484848484848485,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8484848484848485,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.5,
   "task_error_dist": {
    "0": 0,
    "1": 6,
    "2": 3,
    "3+": 21
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.9043600562587905,
     "n": 711
    },
    "branch": {
     "acc": 0.7189542483660131,
     "n": 153
    },
    "done": {
     "acc": 0.03333333333333333,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8046875,
     "n": 128
    },
    "16-31": {
     "acc": 0.8609625668449198,
     "n": 187
    },
    "2-3": {
     "acc": 0.8909090909090909,
     "n": 110
    },
    "32+": {
     "acc": 0.889763779527559,
     "n": 127
    },
    "4-7": {
     "acc": 0.8297872340425532,
     "n": 188
    },
    "8-15": {
     "acc": 0.8315217391304348,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8484848484848485,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.886435331230284,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.886435331230284,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.2,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 8
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9090909090909091,
     "n": 253
    },
    "branch": {
     "acc": 0.8636363636363636,
     "n": 44
    },
    "done": {
     "acc": 0.3,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8571428571428571,
     "n": 49
    },
    "16-31": {
     "acc": 0.8378378378378378,
     "n": 37
    },
    "2-3": {
     "acc": 0.8813559322033898,
     "n": 59
    },
    "32+": {
     "acc": 1.0,
     "n": 9
    },
    "4-7": {
     "acc": 0.9240506329113924,
     "n": 79
    },
    "8-15": {
     "acc": 0.8809523809523809,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8945686900958466,
     "n": 313
    },
    "8-16k": {
     "acc": 0.25,
     "n": 4
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.889589905362776,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.889589905362776,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 14.3,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 9
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9169960474308301,
     "n": 253
    },
    "branch": {
     "acc": 0.8636363636363636,
     "n": 44
    },
    "done": {
     "acc": 0.2,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.875,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.8292682926829268,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.9113924050632911,
     "n": 79
    },
    "8-15": {
     "acc": 0.9215686274509803,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8910256410256411,
     "n": 312
    },
    "8-16k": {
     "acc": 0.8,
     "n": 5
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8456375838926175,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8456375838926175,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.5,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 18
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9188034188034188,
     "n": 468
    },
    "branch": {
     "acc": 0.6136363636363636,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8289473684210527,
     "n": 76
    },
    "16-31": {
     "acc": 0.928,
     "n": 125
    },
    "2-3": {
     "acc": 0.7625,
     "n": 80
    },
    "32+": {
     "acc": 0.8433734939759037,
     "n": 83
    },
    "4-7": {
     "acc": 0.8686868686868687,
     "n": 99
    },
    "8-15": {
     "acc": 0.8120300751879699,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8456375838926175,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8657718120805369,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8657718120805369,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.95,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 2,
    "3+": 16
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9081196581196581,
     "n": 468
    },
    "branch": {
     "acc": 0.8068181818181818,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9052631578947369,
     "n": 95
    },
    "16-31": {
     "acc": 0.9036144578313253,
     "n": 83
    },
    "2-3": {
     "acc": 0.7962962962962963,
     "n": 108
    },
    "32+": {
     "acc": 0.8870967741935484,
     "n": 62
    },
    "4-7": {
     "acc": 0.889763779527559,
     "n": 127
    },
    "8-15": {
     "acc": 0.8347107438016529,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8657718120805369,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8138528138528138,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8138528138528138,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.933333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 28
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.90014064697609,
     "n": 711
    },
    "branch": {
     "acc": 0.5359477124183006,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9137931034482759,
     "n": 58
    },
    "16-31": {
     "acc": 0.8326359832635983,
     "n": 239
    },
    "2-3": {
     "acc": 0.7790697674418605,
     "n": 86
    },
    "32+": {
     "acc": 0.7869565217391304,
     "n": 230
    },
    "4-7": {
     "acc": 0.7565217391304347,
     "n": 115
    },
    "8-15": {
     "acc": 0.8418367346938775,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8138528138528138,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8257575757575758,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8257575757575758,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.566666666666666,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 2,
    "3+": 26
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.8987341772151899,
     "n": 711
    },
    "branch": {
     "acc": 0.6078431372549019,
     "n": 153
    },
    "done": {
     "acc": 0.03333333333333333,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8046875,
     "n": 128
    },
    "16-31": {
     "acc": 0.8449197860962567,
     "n": 187
    },
    "2-3": {
     "acc": 0.8545454545454545,
     "n": 110
    },
    "32+": {
     "acc": 0.8740157480314961,
     "n": 127
    },
    "4-7": {
     "acc": 0.8031914893617021,
     "n": 188
    },
    "8-15": {
     "acc": 0.7934782608695652,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8257575757575758,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9558359621451105,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9558359621451105,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 22.4,
   "task_error_dist": {
    "0": 2,
    "1": 3,
    "2": 4,
    "3+": 1
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9723320158102767,
     "n": 253
    },
    "branch": {
     "acc": 0.9318181818181818,
     "n": 44
    },
    "done": {
     "acc": 0.6,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 49
    },
    "16-31": {
     "acc": 0.8918918918918919,
     "n": 37
    },
    "2-3": {
     "acc": 0.9661016949152542,
     "n": 59
    },
    "32+": {
     "acc": 1.0,
     "n": 9
    },
    "4-7": {
     "acc": 0.9746835443037974,
     "n": 79
    },
    "8-15": {
     "acc": 0.9285714285714286,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9552715654952076,
     "n": 313
    },
    "8-16k": {
     "acc": 1.0,
     "n": 4
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9621451104100947,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9621451104100947,
   "task_completion_rate": 0.3,
   "mean_first_error_depth": 25.1,
   "task_error_dist": {
    "0": 3,
    "1": 4,
    "2": 1,
    "3+": 2
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9762845849802372,
     "n": 253
    },
    "branch": {
     "acc": 0.9318181818181818,
     "n": 44
    },
    "done": {
     "acc": 0.7,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.95,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.9634146341463414,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.9493670886075949,
     "n": 79
    },
    "8-15": {
     "acc": 0.9803921568627451,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9615384615384616,
     "n": 312
    },
    "8-16k": {
     "acc": 1.0,
     "n": 5
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.9177852348993288,
   "format_failure_rate": 0.0050335570469798654,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.9224283305227656,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 17.45,
   "task_error_dist": {
    "0": 0,
    "1": 5,
    "2": 8,
    "3+": 7
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9444444444444444,
     "n": 468
    },
    "branch": {
     "acc": 0.8977272727272727,
     "n": 88
    },
    "done": {
     "acc": 0.3,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9210526315789473,
     "n": 76
    },
    "16-31": {
     "acc": 0.952,
     "n": 125
    },
    "2-3": {
     "acc": 0.8875,
     "n": 80
    },
    "32+": {
     "acc": 0.927710843373494,
     "n": 83
    },
    "4-7": {
     "acc": 0.9393939393939394,
     "n": 99
    },
    "8-15": {
     "acc": 0.8796992481203008,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.9177852348993288,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.9194630872483222,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9194630872483222,
   "task_completion_rate": 0.05,
   "mean_first_error_depth": 19.7,
   "task_error_dist": {
    "0": 1,
    "1": 9,
    "2": 3,
    "3+": 7
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9572649572649573,
     "n": 468
    },
    "branch": {
     "acc": 0.8636363636363636,
     "n": 88
    },
    "done": {
     "acc": 0.2,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.968421052631579,
     "n": 95
    },
    "16-31": {
     "acc": 0.927710843373494,
     "n": 83
    },
    "2-3": {
     "acc": 0.8333333333333334,
     "n": 108
    },
    "32+": {
     "acc": 0.9838709677419355,
     "n": 62
    },
    "4-7": {
     "acc": 0.9212598425196851,
     "n": 127
    },
    "8-15": {
     "acc": 0.9173553719008265,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.9194630872483222,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8636363636363636,
   "format_failure_rate": 0.0010822510822510823,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.8645720476706392,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.633333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 5,
    "3+": 23
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.90014064697609,
     "n": 711
    },
    "branch": {
     "acc": 0.8300653594771242,
     "n": 153
    },
    "done": {
     "acc": 0.03333333333333333,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9482758620689655,
     "n": 58
    },
    "16-31": {
     "acc": 0.8702928870292888,
     "n": 239
    },
    "2-3": {
     "acc": 0.813953488372093,
     "n": 86
    },
    "32+": {
     "acc": 0.8652173913043478,
     "n": 230
    },
    "4-7": {
     "acc": 0.8,
     "n": 115
    },
    "8-15": {
     "acc": 0.8877551020408163,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8636363636363636,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8517316017316018,
   "format_failure_rate": 0.0010822510822510823,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.8526543878656555,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.7,
   "task_error_dist": {
    "0": 0,
    "1": 3,
    "2": 4,
    "3+": 23
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.90014064697609,
     "n": 711
    },
    "branch": {
     "acc": 0.7647058823529411,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8125,
     "n": 128
    },
    "16-31": {
     "acc": 0.8556149732620321,
     "n": 187
    },
    "2-3": {
     "acc": 0.8818181818181818,
     "n": 110
    },
    "32+": {
     "acc": 0.905511811023622,
     "n": 127
    },
    "4-7": {
     "acc": 0.851063829787234,
     "n": 188
    },
    "8-15": {
     "acc": 0.8206521739130435,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8517316017316018,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.8706624605678234,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8706624605678234,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 9
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.924901185770751,
     "n": 253
    },
    "branch": {
     "acc": 0.7272727272727273,
     "n": 44
    },
    "done": {
     "acc": 0.0,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8979591836734694,
     "n": 49
    },
    "16-31": {
     "acc": 0.8648648648648649,
     "n": 37
    },
    "2-3": {
     "acc": 0.864406779661017,
     "n": 59
    },
    "32+": {
     "acc": 1.0,
     "n": 9
    },
    "4-7": {
     "acc": 0.8860759493670886,
     "n": 79
    },
    "8-15": {
     "acc": 0.8333333333333334,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.873015873015873,
     "n": 315
    },
    "8-16k": {
     "acc": 0.5,
     "n": 2
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.861198738170347,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.861198738170347,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 10
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.924901185770751,
     "n": 253
    },
    "branch": {
     "acc": 0.6590909090909091,
     "n": 44
    },
    "done": {
     "acc": 0.0,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8125,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.8048780487804879,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.8860759493670886,
     "n": 79
    },
    "8-15": {
     "acc": 0.9215686274509803,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8634920634920635,
     "n": 315
    },
    "8-16k": {
     "acc": 0.5,
     "n": 2
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8406040268456376,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8406040268456376,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.7,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 19
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9273504273504274,
     "n": 468
    },
    "branch": {
     "acc": 0.5340909090909091,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.881578947368421,
     "n": 76
    },
    "16-31": {
     "acc": 0.904,
     "n": 125
    },
    "2-3": {
     "acc": 0.7625,
     "n": 80
    },
    "32+": {
     "acc": 0.8313253012048193,
     "n": 83
    },
    "4-7": {
     "acc": 0.8686868686868687,
     "n": 99
    },
    "8-15": {
     "acc": 0.7894736842105263,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8406040268456376,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8624161073825504,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8624161073825504,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.1,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 18
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9294871794871795,
     "n": 468
    },
    "branch": {
     "acc": 0.6704545454545454,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8842105263157894,
     "n": 95
    },
    "16-31": {
     "acc": 0.8795180722891566,
     "n": 83
    },
    "2-3": {
     "acc": 0.8055555555555556,
     "n": 108
    },
    "32+": {
     "acc": 0.9193548387096774,
     "n": 62
    },
    "4-7": {
     "acc": 0.905511811023622,
     "n": 127
    },
    "8-15": {
     "acc": 0.8099173553719008,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8624161073825504,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.7857142857142857,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7857142857142857,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.933333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 28
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.8649789029535865,
     "n": 711
    },
    "branch": {
     "acc": 0.5294117647058824,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8103448275862069,
     "n": 58
    },
    "16-31": {
     "acc": 0.8075313807531381,
     "n": 239
    },
    "2-3": {
     "acc": 0.7558139534883721,
     "n": 86
    },
    "32+": {
     "acc": 0.7652173913043478,
     "n": 230
    },
    "4-7": {
     "acc": 0.7217391304347827,
     "n": 115
    },
    "8-15": {
     "acc": 0.826530612244898,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.7857142857142857,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8138528138528138,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8138528138528138,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.133333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 28
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.8917018284106891,
     "n": 711
    },
    "branch": {
     "acc": 0.5751633986928104,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.75,
     "n": 128
    },
    "16-31": {
     "acc": 0.8342245989304813,
     "n": 187
    },
    "2-3": {
     "acc": 0.8363636363636363,
     "n": 110
    },
    "32+": {
     "acc": 0.8582677165354331,
     "n": 127
    },
    "4-7": {
     "acc": 0.8138297872340425,
     "n": 188
    },
    "8-15": {
     "acc": 0.7934782608695652,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8138528138528138,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.5520504731861199,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5520504731861199,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.2,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 10
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.49407114624505927,
     "n": 253
    },
    "branch": {
     "acc": 0.6818181818181818,
     "n": 44
    },
    "done": {
     "acc": 1.0,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.4489795918367347,
     "n": 49
    },
    "16-31": {
     "acc": 0.5945945945945946,
     "n": 37
    },
    "2-3": {
     "acc": 0.559322033898305,
     "n": 59
    },
    "32+": {
     "acc": 0.4444444444444444,
     "n": 9
    },
    "4-7": {
     "acc": 0.6455696202531646,
     "n": 79
    },
    "8-15": {
     "acc": 0.5119047619047619,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.5580645161290323,
     "n": 310
    },
    "8-16k": {
     "acc": 0.2857142857142857,
     "n": 7
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.889589905362776,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.889589905362776,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 18.2,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 1,
    "3+": 7
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9011857707509882,
     "n": 253
    },
    "branch": {
     "acc": 0.9318181818181818,
     "n": 44
    },
    "done": {
     "acc": 0.3,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.825,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.8780487804878049,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.9113924050632911,
     "n": 79
    },
    "8-15": {
     "acc": 0.9215686274509803,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9006410256410257,
     "n": 312
    },
    "8-16k": {
     "acc": 0.2,
     "n": 5
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8640939597315436,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8640939597315436,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.0,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 4,
    "3+": 14
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9145299145299145,
     "n": 468
    },
    "branch": {
     "acc": 0.7386363636363636,
     "n": 88
    },
    "done": {
     "acc": 0.1,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8421052631578947,
     "n": 76
    },
    "16-31": {
     "acc": 0.928,
     "n": 125
    },
    "2-3": {
     "acc": 0.775,
     "n": 80
    },
    "32+": {
     "acc": 0.891566265060241,
     "n": 83
    },
    "4-7": {
     "acc": 0.8787878787878788,
     "n": 99
    },
    "8-15": {
     "acc": 0.8421052631578947,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8640939597315436,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.6124161073825504,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6124161073825504,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.1,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 18
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.5726495726495726,
     "n": 468
    },
    "branch": {
     "acc": 0.6931818181818182,
     "n": 88
    },
    "done": {
     "acc": 0.8,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6947368421052632,
     "n": 95
    },
    "16-31": {
     "acc": 0.6626506024096386,
     "n": 83
    },
    "2-3": {
     "acc": 0.5,
     "n": 108
    },
    "32+": {
     "acc": 0.7580645161290323,
     "n": 62
    },
    "4-7": {
     "acc": 0.5826771653543307,
     "n": 127
    },
    "8-15": {
     "acc": 0.5702479338842975,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.6124161073825504,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.40476190476190477,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.40476190476190477,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.533333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 30
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.3150492264416315,
     "n": 711
    },
    "branch": {
     "acc": 0.5882352941176471,
     "n": 153
    },
    "done": {
     "acc": 1.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7068965517241379,
     "n": 58
    },
    "16-31": {
     "acc": 0.401673640167364,
     "n": 239
    },
    "2-3": {
     "acc": 0.313953488372093,
     "n": 86
    },
    "32+": {
     "acc": 0.4391304347826087,
     "n": 230
    },
    "4-7": {
     "acc": 0.28695652173913044,
     "n": 115
    },
    "8-15": {
     "acc": 0.3877551020408163,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.40476190476190477,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.6028138528138528,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6028138528138528,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.033333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 2,
    "3+": 26
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.5879043600562588,
     "n": 711
    },
    "branch": {
     "acc": 0.5620915032679739,
     "n": 153
    },
    "done": {
     "acc": 0.7666666666666667,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5703125,
     "n": 128
    },
    "16-31": {
     "acc": 0.6256684491978609,
     "n": 187
    },
    "2-3": {
     "acc": 0.5454545454545454,
     "n": 110
    },
    "32+": {
     "acc": 0.7874015748031497,
     "n": 127
    },
    "4-7": {
     "acc": 0.5372340425531915,
     "n": 188
    },
    "8-15": {
     "acc": 0.5760869565217391,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6028138528138528,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9148264984227129,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9148264984227129,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 20.8,
   "task_error_dist": {
    "0": 2,
    "1": 2,
    "2": 1,
    "3+": 5
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9446640316205533,
     "n": 253
    },
    "branch": {
     "acc": 0.8409090909090909,
     "n": 44
    },
    "done": {
     "acc": 0.4,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9591836734693877,
     "n": 49
    },
    "16-31": {
     "acc": 0.8918918918918919,
     "n": 37
    },
    "2-3": {
     "acc": 0.8983050847457628,
     "n": 59
    },
    "32+": {
     "acc": 0.8888888888888888,
     "n": 9
    },
    "4-7": {
     "acc": 0.9367088607594937,
     "n": 79
    },
    "8-15": {
     "acc": 0.8928571428571429,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9137380191693291,
     "n": 313
    },
    "8-16k": {
     "acc": 1.0,
     "n": 4
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n10-m24-b25-zipf-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 10,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 317,
   "accuracy": 0.9526813880126183,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9526813880126183,
   "task_completion_rate": 0.3,
   "mean_first_error_depth": 25.6,
   "task_error_dist": {
    "0": 3,
    "1": 2,
    "2": 3,
    "3+": 2
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 10
    },
    "advance": {
     "acc": 0.9762845849802372,
     "n": 253
    },
    "branch": {
     "acc": 0.9090909090909091,
     "n": 44
    },
    "done": {
     "acc": 0.5,
     "n": 10
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.925,
     "n": 80
    },
    "16-31": {
     "acc": 1.0,
     "n": 11
    },
    "2-3": {
     "acc": 0.9512195121951219,
     "n": 82
    },
    "32+": {
     "acc": 1.0,
     "n": 14
    },
    "4-7": {
     "acc": 0.9493670886075949,
     "n": 79
    },
    "8-15": {
     "acc": 0.9803921568627451,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9519230769230769,
     "n": 312
    },
    "8-16k": {
     "acc": 1.0,
     "n": 5
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.8909395973154363,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8909395973154363,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 16.05,
   "task_error_dist": {
    "0": 0,
    "1": 3,
    "2": 2,
    "3+": 15
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.9337606837606838,
     "n": 468
    },
    "branch": {
     "acc": 0.8409090909090909,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9078947368421053,
     "n": 76
    },
    "16-31": {
     "acc": 0.928,
     "n": 125
    },
    "2-3": {
     "acc": 0.8,
     "n": 80
    },
    "32+": {
     "acc": 0.9397590361445783,
     "n": 83
    },
    "4-7": {
     "acc": 0.9191919191919192,
     "n": 99
    },
    "8-15": {
     "acc": 0.849624060150376,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8909395973154363,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n20-m24-b25-zipf-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 20,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 596,
   "accuracy": 0.912751677852349,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.912751677852349,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 17.2,
   "task_error_dist": {
    "0": 0,
    "1": 5,
    "2": 7,
    "3+": 8
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 20
    },
    "advance": {
     "acc": 0.938034188034188,
     "n": 468
    },
    "branch": {
     "acc": 0.9090909090909091,
     "n": 88
    },
    "done": {
     "acc": 0.25,
     "n": 20
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9473684210526315,
     "n": 95
    },
    "16-31": {
     "acc": 0.9036144578313253,
     "n": 83
    },
    "2-3": {
     "acc": 0.8611111111111112,
     "n": 108
    },
    "32+": {
     "acc": 0.9516129032258065,
     "n": 62
    },
    "4-7": {
     "acc": 0.905511811023622,
     "n": 127
    },
    "8-15": {
     "acc": 0.9256198347107438,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.912751677852349,
     "n": 596
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.8528138528138528,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8528138528138528,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.333333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 4,
    "2": 1,
    "3+": 25
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.9071729957805907,
     "n": 711
    },
    "branch": {
     "acc": 0.738562091503268,
     "n": 153
    },
    "done": {
     "acc": 0.0,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9137931034482759,
     "n": 58
    },
    "16-31": {
     "acc": 0.8577405857740585,
     "n": 239
    },
    "2-3": {
     "acc": 0.8023255813953488,
     "n": 86
    },
    "32+": {
     "acc": 0.8217391304347826,
     "n": 230
    },
    "4-7": {
     "acc": 0.8260869565217391,
     "n": 115
    },
    "8-15": {
     "acc": 0.9030612244897959,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8528138528138528,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m24-b25-zipf-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 24,
    "branch_prob": 0.25,
    "schedule": "zipf",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 924,
   "accuracy": 0.7803030303030303,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7803030303030303,
   "task_completion_rate": 0.03333333333333333,
   "mean_first_error_depth": 14.3,
   "task_error_dist": {
    "0": 1,
    "1": 4,
    "2": 4,
    "3+": 21
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.8255977496483825,
     "n": 711
    },
    "branch": {
     "acc": 0.6601307189542484,
     "n": 153
    },
    "done": {
     "acc": 0.1,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7578125,
     "n": 128
    },
    "16-31": {
     "acc": 0.839572192513369,
     "n": 187
    },
    "2-3": {
     "acc": 0.7,
     "n": 110
    },
    "32+": {
     "acc": 0.9133858267716536,
     "n": 127
    },
    "4-7": {
     "acc": 0.75,
     "n": 188
    },
    "8-15": {
     "acc": 0.7228260869565217,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.7803030303030303,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n100-m8-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 100,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 976,
   "accuracy": 0.8206967213114754,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8206967213114754,
   "task_completion_rate": 0.01,
   "mean_first_error_depth": 6.47,
   "task_error_dist": {
    "0": 1,
    "1": 62,
    "2": 13,
    "3+": 24
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 100
    },
    "advance": {
     "acc": 0.9341142020497804,
     "n": 683
    },
    "branch": {
     "acc": 0.6666666666666666,
     "n": 93
    },
    "done": {
     "acc": 0.01,
     "n": 100
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9823008849557522,
     "n": 113
    },
    "16-31": {
     "acc": 0.7976878612716763,
     "n": 173
    },
    "2-3": {
     "acc": 0.7428571428571429,
     "n": 35
    },
    "32+": {
     "acc": 0.8140900195694716,
     "n": 511
    },
    "4-7": {
     "acc": 0.7555555555555555,
     "n": 45
    },
    "8-15": {
     "acc": 0.7676767676767676,
     "n": 99
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.7824427480916031,
     "n": 786
    },
    "8-16k": {
     "acc": 0.9789473684210527,
     "n": 190
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m8-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 284,
   "accuracy": 0.8626760563380281,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8626760563380281,
   "task_completion_rate": 0.03333333333333333,
   "mean_first_error_depth": 7.366666666666666,
   "task_error_dist": {
    "0": 1,
    "1": 21,
    "2": 7,
    "3+": 1
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.955,
     "n": 200
    },
    "branch": {
     "acc": 0.9583333333333334,
     "n": 24
    },
    "done": {
     "acc": 0.03333333333333333,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.975609756097561,
     "n": 41
    },
    "16-31": {
     "acc": 0.8709677419354839,
     "n": 62
    },
    "2-3": {
     "acc": 0.6956521739130435,
     "n": 23
    },
    "32+": {
     "acc": 0.8823529411764706,
     "n": 68
    },
    "4-7": {
     "acc": 0.8292682926829268,
     "n": 41
    },
    "8-15": {
     "acc": 0.8367346938775511,
     "n": 49
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8626760563380281,
     "n": 284
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n60-m8-b25-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 60,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 568,
   "accuracy": 0.8133802816901409,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8133802816901409,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.3,
   "task_error_dist": {
    "0": 0,
    "1": 40,
    "2": 3,
    "3+": 17
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 60
    },
    "advance": {
     "acc": 0.9292929292929293,
     "n": 396
    },
    "branch": {
     "acc": 0.6346153846153846,
     "n": 52
    },
    "done": {
     "acc": 0.016666666666666666,
     "n": 60
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8518518518518519,
     "n": 81
    },
    "16-31": {
     "acc": 0.8260869565217391,
     "n": 115
    },
    "2-3": {
     "acc": 0.75,
     "n": 20
    },
    "32+": {
     "acc": 0.8608695652173913,
     "n": 230
    },
    "4-7": {
     "acc": 0.7,
     "n": 50
    },
    "8-15": {
     "acc": 0.6944444444444444,
     "n": 72
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8133802816901409,
     "n": 568
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n100-m8-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 100,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 976,
   "accuracy": 0.8360655737704918,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8360655737704918,
   "task_completion_rate": 0.02,
   "mean_first_error_depth": 7.08,
   "task_error_dist": {
    "0": 2,
    "1": 68,
    "2": 15,
    "3+": 15
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 100
    },
    "advance": {
     "acc": 0.9326500732064422,
     "n": 683
    },
    "branch": {
     "acc": 0.8279569892473119,
     "n": 93
    },
    "done": {
     "acc": 0.02,
     "n": 100
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9823008849557522,
     "n": 113
    },
    "16-31": {
     "acc": 0.7687861271676301,
     "n": 173
    },
    "2-3": {
     "acc": 0.7714285714285715,
     "n": 35
    },
    "32+": {
     "acc": 0.8454011741682974,
     "n": 511
    },
    "4-7": {
     "acc": 0.8444444444444444,
     "n": 45
    },
    "8-15": {
     "acc": 0.7575757575757576,
     "n": 99
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8015267175572519,
     "n": 786
    },
    "8-16k": {
     "acc": 0.9789473684210527,
     "n": 190
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n30-m8-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 30,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 284,
   "accuracy": 0.9084507042253521,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9084507042253521,
   "task_completion_rate": 0.4666666666666667,
   "mean_first_error_depth": 8.266666666666667,
   "task_error_dist": {
    "0": 14,
    "1": 11,
    "2": 3,
    "3+": 2
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 30
    },
    "advance": {
     "acc": 0.92,
     "n": 200
    },
    "branch": {
     "acc": 0.9583333333333334,
     "n": 24
    },
    "done": {
     "acc": 0.7,
     "n": 30
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9512195121951219,
     "n": 41
    },
    "16-31": {
     "acc": 0.9193548387096774,
     "n": 62
    },
    "2-3": {
     "acc": 0.8260869565217391,
     "n": 23
    },
    "32+": {
     "acc": 0.9411764705882353,
     "n": 68
    },
    "4-7": {
     "acc": 0.9024390243902439,
     "n": 41
    },
    "8-15": {
     "acc": 0.8571428571428571,
     "n": 49
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9084507042253521,
     "n": 284
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+journey+pipeline+recipes+repair-n60-m8-b25-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "recipes",
     "repair",
     "pipeline",
     "journey",
     "assembly"
    ],
    "n_tasks": 60,
    "steps_mean": 8,
    "branch_prob": 0.25,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2
   },
   "n_events": 568,
   "accuracy": 0.8767605633802817,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8767605633802817,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.85,
   "task_error_dist": {
    "0": 0,
    "1": 52,
    "2": 6,
    "3+": 2
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 60
    },
    "advance": {
     "acc": 0.9797979797979798,
     "n": 396
    },
    "branch": {
     "acc": 0.9615384615384616,
     "n": 52
    },
    "done": {
     "acc": 0.0,
     "n": 60
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8765432098765432,
     "n": 81
    },
    "16-31": {
     "acc": 0.8956521739130435,
     "n": 115
    },
    "2-3": {
     "acc": 0.8,
     "n": 20
    },
    "32+": {
     "acc": 0.9304347826086956,
     "n": 230
    },
    "4-7": {
     "acc": 0.8,
     "n": 50
    },
    "8-15": {
     "acc": 0.75,
     "n": 72
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8767605633802817,
     "n": 568
    }
   },
   "truncated": false,
   "error": null
  }
 ]
};
