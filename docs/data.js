window.MTB_DATA = {
 "commit": "06eaefe",
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
   "tasks_total": 10,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 3,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 2,
     "clean_x": 3
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 3,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 3,
     "clean_x": 4
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 6,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 4
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 3,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 6,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 3
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 10,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 3,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 1,
     "clean_x": 2
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 3,
   "tasks_clean_excl_done": 5,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 3,
     "clean_x": 5
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 2
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 20,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 8,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 3
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 1,
     "clean_x": 3
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 3,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 0,
     "clean_x": 2
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 0
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 10,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 2,
     "clean_x": 3
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 10,
   "tasks_clean": 3,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 7,
     "clean": 3,
     "clean_x": 4
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 3,
   "task_length_dist": {
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 0
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 20,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 11,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 0,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 30,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 4,
   "task_length_dist": {
    "31+": {
     "tasks": 18,
     "clean": 1,
     "clean_x": 1
    },
    "23-30": {
     "tasks": 6,
     "clean": 0,
     "clean_x": 1
    },
    "9-14": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 1
    }
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
   "tasks_total": 100,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 63,
   "task_length_dist": {
    "2-8": {
     "tasks": 27,
     "clean": 1,
     "clean_x": 26
    },
    "9-14": {
     "tasks": 69,
     "clean": 0,
     "clean_x": 37
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 30,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 22,
   "task_length_dist": {
    "2-8": {
     "tasks": 10,
     "clean": 0,
     "clean_x": 9
    },
    "9-14": {
     "tasks": 20,
     "clean": 1,
     "clean_x": 13
    }
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
   "tasks_total": 60,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 40,
   "task_length_dist": {
    "9-14": {
     "tasks": 40,
     "clean": 0,
     "clean_x": 22
    },
    "2-8": {
     "tasks": 19,
     "clean": 0,
     "clean_x": 18
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 100,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 70,
   "task_length_dist": {
    "2-8": {
     "tasks": 27,
     "clean": 0,
     "clean_x": 26
    },
    "9-14": {
     "tasks": 69,
     "clean": 2,
     "clean_x": 44
    },
    "15-22": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    }
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
   "tasks_total": 30,
   "tasks_clean": 14,
   "tasks_clean_excl_done": 22,
   "task_length_dist": {
    "2-8": {
     "tasks": 10,
     "clean": 5,
     "clean_x": 9
    },
    "9-14": {
     "tasks": 20,
     "clean": 9,
     "clean_x": 13
    }
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
   "tasks_total": 60,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 52,
   "task_length_dist": {
    "9-14": {
     "tasks": 40,
     "clean": 0,
     "clean_x": 33
    },
    "2-8": {
     "tasks": 19,
     "clean": 0,
     "clean_x": 18
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 1
    }
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
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.9923076923076923,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9923076923076923,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 58.0,
   "task_error_dist": {
    "0": 1,
    "1": 1,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 1.0,
     "n": 76
    },
    "branch": {
     "acc": 0.98,
     "n": 50
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9864864864864865,
     "n": 74
    },
    "2-3": {
     "acc": 1.0,
     "n": 43
    },
    "4-7": {
     "acc": 1.0,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 49
    },
    "4-8k": {
     "acc": 0.9876543209876543,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 1.0,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 1.0,
   "task_completion_rate": 1.0,
   "mean_first_error_depth": 55.5,
   "task_error_dist": {
    "0": 2,
    "1": 0,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 2,
     "clean_x": 2
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 1.0,
     "n": 74
    },
    "branch": {
     "acc": 1.0,
     "n": 33
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 73
    },
    "2-3": {
     "acc": 1.0,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.9913793103448276,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9913793103448276,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 56.0,
   "task_error_dist": {
    "0": 1,
    "1": 1,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9871794871794872,
     "n": 78
    },
    "branch": {
     "acc": 1.0,
     "n": 34
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9814814814814815,
     "n": 54
    },
    "2-3": {
     "acc": 1.0,
     "n": 48
    },
    "4-7": {
     "acc": 1.0,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9913793103448276,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.9467455621301775,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9467455621301775,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9393939393939394,
     "n": 99
    },
    "branch": {
     "acc": 0.9545454545454546,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9245283018867925,
     "n": 106
    },
    "2-3": {
     "acc": 0.975,
     "n": 40
    },
    "4-7": {
     "acc": 1.0,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9467455621301775,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.9864864864864865,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9864864864864865,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 34.0,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9761904761904762,
     "n": 84
    },
    "branch": {
     "acc": 1.0,
     "n": 60
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.978494623655914,
     "n": 93
    },
    "2-3": {
     "acc": 1.0,
     "n": 39
    },
    "4-7": {
     "acc": 1.0,
     "n": 15
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9642857142857143,
     "n": 28
    },
    "4-8k": {
     "acc": 0.9916666666666667,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.9776119402985075,
   "format_failure_rate": 0.007462686567164179,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.9849624060150376,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 32.0,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 0.5,
     "n": 2
    },
    "advance": {
     "acc": 0.9876543209876543,
     "n": 81
    },
    "branch": {
     "acc": 0.9795918367346939,
     "n": 49
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9615384615384616,
     "n": 78
    },
    "2-3": {
     "acc": 1.0,
     "n": 37
    },
    "4-7": {
     "acc": 1.0,
     "n": 18
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9726027397260274,
     "n": 73
    },
    "4-8k": {
     "acc": 0.9836065573770492,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.9863945578231292,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9863945578231292,
   "task_completion_rate": 0.3333333333333333,
   "mean_first_error_depth": 25.0,
   "task_error_dist": {
    "0": 1,
    "1": 2,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 3,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 1.0,
     "n": 88
    },
    "branch": {
     "acc": 0.9622641509433962,
     "n": 53
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 73
    },
    "2-3": {
     "acc": 1.0,
     "n": 40
    },
    "4-7": {
     "acc": 0.967741935483871,
     "n": 31
    },
    "8-15": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 22
    },
    "4-8k": {
     "acc": 0.984,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.9671052631578947,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9671052631578947,
   "task_completion_rate": 0.3333333333333333,
   "mean_first_error_depth": 42.0,
   "task_error_dist": {
    "0": 1,
    "1": 1,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 3,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.95,
     "n": 100
    },
    "branch": {
     "acc": 1.0,
     "n": 46
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9642857142857143,
     "n": 56
    },
    "2-3": {
     "acc": 0.953125,
     "n": 64
    },
    "4-7": {
     "acc": 1.0,
     "n": 25
    },
    "8-15": {
     "acc": 1.0,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 50
    },
    "4-8k": {
     "acc": 0.9509803921568627,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.9872611464968153,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9872611464968153,
   "task_completion_rate": 0.3333333333333333,
   "mean_first_error_depth": 49.666666666666664,
   "task_error_dist": {
    "0": 1,
    "1": 2,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 3,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9811320754716981,
     "n": 106
    },
    "branch": {
     "acc": 1.0,
     "n": 45
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9655172413793104,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 1.0,
     "n": 60
    },
    "4-7": {
     "acc": 1.0,
     "n": 29
    },
    "8-15": {
     "acc": 1.0,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 53
    },
    "4-8k": {
     "acc": 0.9807692307692307,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.9192825112107623,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9192825112107623,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 17.0,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9224806201550387,
     "n": 129
    },
    "branch": {
     "acc": 0.9090909090909091,
     "n": 88
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.90625,
     "n": 96
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.9506172839506173,
     "n": 81
    },
    "4-7": {
     "acc": 0.8974358974358975,
     "n": 39
    },
    "8-15": {
     "acc": 0.8333333333333334,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9192825112107623,
     "n": 223
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.954337899543379,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.954337899543379,
   "task_completion_rate": 0.3333333333333333,
   "mean_first_error_depth": 31.666666666666668,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9256198347107438,
     "n": 121
    },
    "branch": {
     "acc": 0.9891304347826086,
     "n": 92
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9622641509433962,
     "n": 106
    },
    "2-3": {
     "acc": 0.96,
     "n": 75
    },
    "4-7": {
     "acc": 0.9333333333333333,
     "n": 30
    },
    "8-15": {
     "acc": 0.875,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.954337899543379,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.9552238805970149,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9552238805970149,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 26.0,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9572649572649573,
     "n": 117
    },
    "branch": {
     "acc": 0.9615384615384616,
     "n": 78
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.974025974025974,
     "n": 77
    },
    "2-3": {
     "acc": 0.9726027397260274,
     "n": 73
    },
    "4-7": {
     "acc": 0.8974358974358975,
     "n": 39
    },
    "8-15": {
     "acc": 0.9166666666666666,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9552238805970149,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.9214876033057852,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9214876033057852,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 15.8,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 4
   },
   "tasks_total": 5,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.9038461538461539,
     "n": 156
    },
    "branch": {
     "acc": 0.9473684210526315,
     "n": 76
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9452054794520548,
     "n": 73
    },
    "16-31": {
     "acc": 1.0,
     "n": 9
    },
    "2-3": {
     "acc": 0.9195402298850575,
     "n": 87
    },
    "4-7": {
     "acc": 0.8545454545454545,
     "n": 55
    },
    "8-15": {
     "acc": 1.0,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9214876033057852,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.9145299145299145,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9145299145299145,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 16.8,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.9115646258503401,
     "n": 147
    },
    "branch": {
     "acc": 0.961038961038961,
     "n": 77
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9594594594594594,
     "n": 74
    },
    "16-31": {
     "acc": 1.0,
     "n": 9
    },
    "2-3": {
     "acc": 0.8688524590163934,
     "n": 61
    },
    "4-7": {
     "acc": 0.8888888888888888,
     "n": 63
    },
    "8-15": {
     "acc": 0.9259259259259259,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9145299145299145,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.9121338912133892,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9121338912133892,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 24.8,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8867924528301887,
     "n": 159
    },
    "branch": {
     "acc": 0.9571428571428572,
     "n": 70
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.921875,
     "n": 64
    },
    "16-31": {
     "acc": 1.0,
     "n": 2
    },
    "2-3": {
     "acc": 0.9066666666666666,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.90625,
     "n": 64
    },
    "8-15": {
     "acc": 0.9090909090909091,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9121338912133892,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.7946666666666666,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7946666666666666,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7395348837209302,
     "n": 215
    },
    "branch": {
     "acc": 0.8733333333333333,
     "n": 150
    },
    "done": {
     "acc": 0.6,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7628865979381443,
     "n": 97
    },
    "16-31": {
     "acc": 0.8333333333333334,
     "n": 6
    },
    "2-3": {
     "acc": 0.8256880733944955,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.8018018018018018,
     "n": 111
    },
    "8-15": {
     "acc": 0.7647058823529411,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.7946666666666666,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.8932038834951457,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8932038834951457,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 18.8,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 4
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8421052631578947,
     "n": 171
    },
    "branch": {
     "acc": 0.96875,
     "n": 128
    },
    "done": {
     "acc": 0.6,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9431818181818182,
     "n": 88
    },
    "16-31": {
     "acc": 1.0,
     "n": 6
    },
    "2-3": {
     "acc": 0.8842105263157894,
     "n": 95
    },
    "4-7": {
     "acc": 0.8701298701298701,
     "n": 77
    },
    "8-15": {
     "acc": 0.8372093023255814,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9444444444444444,
     "n": 36
    },
    "8-16k": {
     "acc": 0.8864468864468864,
     "n": 273
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "google/gemini-2.5-flash-lite",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.7556179775280899,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7556179775280899,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6941747572815534,
     "n": 206
    },
    "branch": {
     "acc": 0.8571428571428571,
     "n": 140
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7333333333333333,
     "n": 90
    },
    "16-31": {
     "acc": 0.75,
     "n": 16
    },
    "2-3": {
     "acc": 0.7604166666666666,
     "n": 96
    },
    "4-7": {
     "acc": 0.7889908256880734,
     "n": 109
    },
    "8-15": {
     "acc": 0.7111111111111111,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.7556179775280899,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.8692307692307693,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8692307692307693,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 20.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8552631578947368,
     "n": 76
    },
    "branch": {
     "acc": 0.9,
     "n": 50
    },
    "done": {
     "acc": 0.5,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9054054054054054,
     "n": 74
    },
    "2-3": {
     "acc": 0.813953488372093,
     "n": 43
    },
    "4-7": {
     "acc": 0.8333333333333334,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9183673469387755,
     "n": 49
    },
    "4-8k": {
     "acc": 0.8395061728395061,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 0.8918918918918919,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8918918918918919,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8918918918918919,
     "n": 74
    },
    "branch": {
     "acc": 0.8787878787878788,
     "n": 33
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8904109589041096,
     "n": 73
    },
    "2-3": {
     "acc": 0.8666666666666667,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8918918918918919,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.8103448275862069,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8103448275862069,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8461538461538461,
     "n": 78
    },
    "branch": {
     "acc": 0.7352941176470589,
     "n": 34
    },
    "done": {
     "acc": 0.5,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7962962962962963,
     "n": 54
    },
    "2-3": {
     "acc": 0.8125,
     "n": 48
    },
    "4-7": {
     "acc": 0.8571428571428571,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8103448275862069,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.7988165680473372,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7988165680473372,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.7777777777777778,
     "n": 99
    },
    "branch": {
     "acc": 0.8181818181818182,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7735849056603774,
     "n": 106
    },
    "2-3": {
     "acc": 0.825,
     "n": 40
    },
    "4-7": {
     "acc": 0.8636363636363636,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7988165680473372,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.8445945945945946,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8445945945945946,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8571428571428571,
     "n": 84
    },
    "branch": {
     "acc": 0.8166666666666667,
     "n": 60
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8924731182795699,
     "n": 93
    },
    "2-3": {
     "acc": 0.7435897435897436,
     "n": 39
    },
    "4-7": {
     "acc": 0.8,
     "n": 15
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8928571428571429,
     "n": 28
    },
    "4-8k": {
     "acc": 0.8333333333333334,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.7985074626865671,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7985074626865671,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8518518518518519,
     "n": 81
    },
    "branch": {
     "acc": 0.7142857142857143,
     "n": 49
    },
    "done": {
     "acc": 0.5,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7948717948717948,
     "n": 78
    },
    "2-3": {
     "acc": 0.8378378378378378,
     "n": 37
    },
    "4-7": {
     "acc": 0.7777777777777778,
     "n": 18
    },
    "8-15": {
     "acc": 0.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8356164383561644,
     "n": 73
    },
    "4-8k": {
     "acc": 0.7540983606557377,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.7959183673469388,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7959183673469388,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.333333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.7954545454545454,
     "n": 88
    },
    "branch": {
     "acc": 0.8113207547169812,
     "n": 53
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7671232876712328,
     "n": 73
    },
    "2-3": {
     "acc": 0.9,
     "n": 40
    },
    "4-7": {
     "acc": 0.7419354838709677,
     "n": 31
    },
    "8-15": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 22
    },
    "4-8k": {
     "acc": 0.76,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.9078947368421053,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9078947368421053,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.333333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.91,
     "n": 100
    },
    "branch": {
     "acc": 0.9130434782608695,
     "n": 46
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9464285714285714,
     "n": 56
    },
    "2-3": {
     "acc": 0.859375,
     "n": 64
    },
    "4-7": {
     "acc": 0.96,
     "n": 25
    },
    "8-15": {
     "acc": 0.8571428571428571,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.94,
     "n": 50
    },
    "4-8k": {
     "acc": 0.8921568627450981,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.7961783439490446,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7961783439490446,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 16.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.8113207547169812,
     "n": 106
    },
    "branch": {
     "acc": 0.7777777777777778,
     "n": 45
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6896551724137931,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.85,
     "n": 60
    },
    "4-7": {
     "acc": 0.8620689655172413,
     "n": 29
    },
    "8-15": {
     "acc": 0.8888888888888888,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9056603773584906,
     "n": 53
    },
    "4-8k": {
     "acc": 0.7403846153846154,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.7130044843049327,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7130044843049327,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.666666666666667,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.6589147286821705,
     "n": 129
    },
    "branch": {
     "acc": 0.7840909090909091,
     "n": 88
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.65625,
     "n": 96
    },
    "16-31": {
     "acc": 0.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.7407407407407407,
     "n": 81
    },
    "4-7": {
     "acc": 0.7948717948717948,
     "n": 39
    },
    "8-15": {
     "acc": 0.8333333333333334,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7130044843049327,
     "n": 223
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.7488584474885844,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7488584474885844,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.666666666666667,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.7024793388429752,
     "n": 121
    },
    "branch": {
     "acc": 0.8152173913043478,
     "n": 92
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7452830188679245,
     "n": 106
    },
    "2-3": {
     "acc": 0.7733333333333333,
     "n": 75
    },
    "4-7": {
     "acc": 0.7,
     "n": 30
    },
    "8-15": {
     "acc": 0.75,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7488584474885844,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.6716417910447762,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6716417910447762,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.333333333333334,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.6581196581196581,
     "n": 117
    },
    "branch": {
     "acc": 0.6923076923076923,
     "n": 78
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6623376623376623,
     "n": 77
    },
    "2-3": {
     "acc": 0.6575342465753424,
     "n": 73
    },
    "4-7": {
     "acc": 0.6666666666666666,
     "n": 39
    },
    "8-15": {
     "acc": 0.8333333333333334,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6716417910447762,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.7603305785123967,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7603305785123967,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 7.6,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 4
   },
   "tasks_total": 5,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7756410256410257,
     "n": 156
    },
    "branch": {
     "acc": 0.75,
     "n": 76
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6986301369863014,
     "n": 73
    },
    "16-31": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "2-3": {
     "acc": 0.8045977011494253,
     "n": 87
    },
    "4-7": {
     "acc": 0.7272727272727273,
     "n": 55
    },
    "8-15": {
     "acc": 0.8888888888888888,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7603305785123967,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.7948717948717948,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7948717948717948,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.8,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7891156462585034,
     "n": 147
    },
    "branch": {
     "acc": 0.8181818181818182,
     "n": 77
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8108108108108109,
     "n": 74
    },
    "16-31": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "2-3": {
     "acc": 0.7049180327868853,
     "n": 61
    },
    "4-7": {
     "acc": 0.8412698412698413,
     "n": 63
    },
    "8-15": {
     "acc": 0.8518518518518519,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7948717948717948,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.7447698744769874,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7447698744769874,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7735849056603774,
     "n": 159
    },
    "branch": {
     "acc": 0.6857142857142857,
     "n": 70
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.734375,
     "n": 64
    },
    "16-31": {
     "acc": 0.5,
     "n": 2
    },
    "2-3": {
     "acc": 0.7733333333333333,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.703125,
     "n": 64
    },
    "8-15": {
     "acc": 0.7878787878787878,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7447698744769874,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.6133333333333333,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6133333333333333,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6232558139534884,
     "n": 215
    },
    "branch": {
     "acc": 0.5933333333333334,
     "n": 150
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5360824742268041,
     "n": 97
    },
    "16-31": {
     "acc": 0.8333333333333334,
     "n": 6
    },
    "2-3": {
     "acc": 0.6330275229357798,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.6486486486486487,
     "n": 111
    },
    "8-15": {
     "acc": 0.6078431372549019,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.6133333333333333,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.5566343042071198,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5566343042071198,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.5087719298245614,
     "n": 171
    },
    "branch": {
     "acc": 0.625,
     "n": 128
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5681818181818182,
     "n": 88
    },
    "16-31": {
     "acc": 0.3333333333333333,
     "n": 6
    },
    "2-3": {
     "acc": 0.5578947368421052,
     "n": 95
    },
    "4-7": {
     "acc": 0.4805194805194805,
     "n": 77
    },
    "8-15": {
     "acc": 0.6976744186046512,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8333333333333334,
     "n": 36
    },
    "8-16k": {
     "acc": 0.5201465201465202,
     "n": 273
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "meta-llama/llama-3.1-8b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.598314606741573,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.598314606741573,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6359223300970874,
     "n": 206
    },
    "branch": {
     "acc": 0.55,
     "n": 140
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5888888888888889,
     "n": 90
    },
    "16-31": {
     "acc": 0.625,
     "n": 16
    },
    "2-3": {
     "acc": 0.6041666666666666,
     "n": 96
    },
    "4-7": {
     "acc": 0.5871559633027523,
     "n": 109
    },
    "8-15": {
     "acc": 0.6222222222222222,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.598314606741573,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.9692307692307692,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9692307692307692,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 22.0,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9605263157894737,
     "n": 76
    },
    "branch": {
     "acc": 0.98,
     "n": 50
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 74
    },
    "2-3": {
     "acc": 0.9302325581395349,
     "n": 43
    },
    "4-7": {
     "acc": 0.9166666666666666,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9387755102040817,
     "n": 49
    },
    "4-8k": {
     "acc": 0.9876543209876543,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 0.990990990990991,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.990990990990991,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 54.5,
   "task_error_dist": {
    "0": 1,
    "1": 1,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9864864864864865,
     "n": 74
    },
    "branch": {
     "acc": 1.0,
     "n": 33
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9863013698630136,
     "n": 73
    },
    "2-3": {
     "acc": 1.0,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.990990990990991,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.9827586206896551,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9827586206896551,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 53.0,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9871794871794872,
     "n": 78
    },
    "branch": {
     "acc": 0.9705882352941176,
     "n": 34
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9629629629629629,
     "n": 54
    },
    "2-3": {
     "acc": 1.0,
     "n": 48
    },
    "4-7": {
     "acc": 1.0,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9827586206896551,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.9763313609467456,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9763313609467456,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 21.0,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9696969696969697,
     "n": 99
    },
    "branch": {
     "acc": 0.9848484848484849,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 106
    },
    "2-3": {
     "acc": 0.925,
     "n": 40
    },
    "4-7": {
     "acc": 0.9545454545454546,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9763313609467456,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.9797297297297297,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9797297297297297,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 18.0,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9880952380952381,
     "n": 84
    },
    "branch": {
     "acc": 0.9666666666666667,
     "n": 60
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.989247311827957,
     "n": 93
    },
    "2-3": {
     "acc": 0.9743589743589743,
     "n": 39
    },
    "4-7": {
     "acc": 0.9333333333333333,
     "n": 15
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 28
    },
    "4-8k": {
     "acc": 0.975,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.9477611940298507,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9477611940298507,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9259259259259259,
     "n": 81
    },
    "branch": {
     "acc": 0.9795918367346939,
     "n": 49
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9487179487179487,
     "n": 78
    },
    "2-3": {
     "acc": 0.9459459459459459,
     "n": 37
    },
    "4-7": {
     "acc": 0.9444444444444444,
     "n": 18
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9178082191780822,
     "n": 73
    },
    "4-8k": {
     "acc": 0.9836065573770492,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.9591836734693877,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9591836734693877,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 19.666666666666668,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9431818181818182,
     "n": 88
    },
    "branch": {
     "acc": 0.9811320754716981,
     "n": 53
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.958904109589041,
     "n": 73
    },
    "2-3": {
     "acc": 0.95,
     "n": 40
    },
    "4-7": {
     "acc": 0.967741935483871,
     "n": 31
    },
    "8-15": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 22
    },
    "4-8k": {
     "acc": 0.952,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.9736842105263158,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9736842105263158,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 26.666666666666668,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.96,
     "n": 100
    },
    "branch": {
     "acc": 1.0,
     "n": 46
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 56
    },
    "2-3": {
     "acc": 0.9375,
     "n": 64
    },
    "4-7": {
     "acc": 1.0,
     "n": 25
    },
    "8-15": {
     "acc": 1.0,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.98,
     "n": 50
    },
    "4-8k": {
     "acc": 0.9705882352941176,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.9808917197452229,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9808917197452229,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 39.0,
   "task_error_dist": {
    "0": 0,
    "1": 3,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9811320754716981,
     "n": 106
    },
    "branch": {
     "acc": 0.9777777777777777,
     "n": 45
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9655172413793104,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.9833333333333333,
     "n": 60
    },
    "4-7": {
     "acc": 1.0,
     "n": 29
    },
    "8-15": {
     "acc": 1.0,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 53
    },
    "4-8k": {
     "acc": 0.9711538461538461,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.9461883408071748,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9461883408071748,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 23.333333333333332,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.937984496124031,
     "n": 129
    },
    "branch": {
     "acc": 0.9659090909090909,
     "n": 88
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.96875,
     "n": 96
    },
    "16-31": {
     "acc": 0.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.9259259259259259,
     "n": 81
    },
    "4-7": {
     "acc": 0.9487179487179487,
     "n": 39
    },
    "8-15": {
     "acc": 1.0,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9461883408071748,
     "n": 223
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.9452054794520548,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9452054794520548,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 22.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9173553719008265,
     "n": 121
    },
    "branch": {
     "acc": 0.9782608695652174,
     "n": 92
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9528301886792453,
     "n": 106
    },
    "2-3": {
     "acc": 0.96,
     "n": 75
    },
    "4-7": {
     "acc": 0.8666666666666667,
     "n": 30
    },
    "8-15": {
     "acc": 1.0,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9452054794520548,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.9203980099502488,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9203980099502488,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.666666666666666,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.905982905982906,
     "n": 117
    },
    "branch": {
     "acc": 0.9358974358974359,
     "n": 78
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.961038961038961,
     "n": 77
    },
    "2-3": {
     "acc": 0.8493150684931506,
     "n": 73
    },
    "4-7": {
     "acc": 0.9743589743589743,
     "n": 39
    },
    "8-15": {
     "acc": 0.9166666666666666,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9203980099502488,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.9049586776859504,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9049586776859504,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 18.2,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.9038461538461539,
     "n": 156
    },
    "branch": {
     "acc": 0.9078947368421053,
     "n": 76
    },
    "done": {
     "acc": 0.8,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9041095890410958,
     "n": 73
    },
    "16-31": {
     "acc": 0.8888888888888888,
     "n": 9
    },
    "2-3": {
     "acc": 0.896551724137931,
     "n": 87
    },
    "4-7": {
     "acc": 0.9272727272727272,
     "n": 55
    },
    "8-15": {
     "acc": 0.8888888888888888,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9049586776859504,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.9188034188034188,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9188034188034188,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.6,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8979591836734694,
     "n": 147
    },
    "branch": {
     "acc": 0.961038961038961,
     "n": 77
    },
    "done": {
     "acc": 0.8,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.972972972972973,
     "n": 74
    },
    "16-31": {
     "acc": 1.0,
     "n": 9
    },
    "2-3": {
     "acc": 0.9016393442622951,
     "n": 61
    },
    "4-7": {
     "acc": 0.873015873015873,
     "n": 63
    },
    "8-15": {
     "acc": 0.8888888888888888,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9188034188034188,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.9246861924686193,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9246861924686193,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 24.0,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.9182389937106918,
     "n": 159
    },
    "branch": {
     "acc": 0.9428571428571428,
     "n": 70
    },
    "done": {
     "acc": 0.8,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9375,
     "n": 64
    },
    "16-31": {
     "acc": 1.0,
     "n": 2
    },
    "2-3": {
     "acc": 0.9333333333333333,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.921875,
     "n": 64
    },
    "8-15": {
     "acc": 0.8787878787878788,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9246861924686193,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.8266666666666667,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8266666666666667,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7813953488372093,
     "n": 215
    },
    "branch": {
     "acc": 0.9066666666666666,
     "n": 150
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8350515463917526,
     "n": 97
    },
    "16-31": {
     "acc": 0.8333333333333334,
     "n": 6
    },
    "2-3": {
     "acc": 0.8348623853211009,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.8288288288288288,
     "n": 111
    },
    "8-15": {
     "acc": 0.7843137254901961,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.8266666666666667,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.8446601941747572,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8446601941747572,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 14.2,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7894736842105263,
     "n": 171
    },
    "branch": {
     "acc": 0.90625,
     "n": 128
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9318181818181818,
     "n": 88
    },
    "16-31": {
     "acc": 0.5,
     "n": 6
    },
    "2-3": {
     "acc": 0.8631578947368421,
     "n": 95
    },
    "4-7": {
     "acc": 0.7922077922077922,
     "n": 77
    },
    "8-15": {
     "acc": 0.7674418604651163,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 1.0,
     "n": 36
    },
    "8-16k": {
     "acc": 0.8241758241758241,
     "n": 273
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "mistralai/mistral-small-3.2-24b-instruct",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.7865168539325843,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7865168539325843,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7184466019417476,
     "n": 206
    },
    "branch": {
     "acc": 0.8714285714285714,
     "n": 140
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7555555555555555,
     "n": 90
    },
    "16-31": {
     "acc": 0.75,
     "n": 16
    },
    "2-3": {
     "acc": 0.7916666666666666,
     "n": 96
    },
    "4-7": {
     "acc": 0.8256880733944955,
     "n": 109
    },
    "8-15": {
     "acc": 0.7555555555555555,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.7865168539325843,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.7307692307692307,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7307692307692307,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.7368421052631579,
     "n": 76
    },
    "branch": {
     "acc": 0.74,
     "n": 50
    },
    "done": {
     "acc": 0.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7432432432432432,
     "n": 74
    },
    "2-3": {
     "acc": 0.6976744186046512,
     "n": 43
    },
    "4-7": {
     "acc": 0.75,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.7346938775510204,
     "n": 49
    },
    "4-8k": {
     "acc": 0.7283950617283951,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 0.8918918918918919,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8918918918918919,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.918918918918919,
     "n": 74
    },
    "branch": {
     "acc": 0.8484848484848485,
     "n": 33
    },
    "done": {
     "acc": 0.5,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8904109589041096,
     "n": 73
    },
    "2-3": {
     "acc": 0.8666666666666667,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8918918918918919,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.7844827586206896,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7844827586206896,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.7692307692307693,
     "n": 78
    },
    "branch": {
     "acc": 0.7941176470588235,
     "n": 34
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7777777777777778,
     "n": 54
    },
    "2-3": {
     "acc": 0.7708333333333334,
     "n": 48
    },
    "4-7": {
     "acc": 0.8571428571428571,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.7844827586206896,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.6627218934911243,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6627218934911243,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 8.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.6161616161616161,
     "n": 99
    },
    "branch": {
     "acc": 0.7121212121212122,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6415094339622641,
     "n": 106
    },
    "2-3": {
     "acc": 0.7,
     "n": 40
    },
    "4-7": {
     "acc": 0.6818181818181818,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6627218934911243,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.581081081081081,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.581081081081081,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.5357142857142857,
     "n": 84
    },
    "branch": {
     "acc": 0.65,
     "n": 60
    },
    "done": {
     "acc": 0.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5806451612903226,
     "n": 93
    },
    "2-3": {
     "acc": 0.6153846153846154,
     "n": 39
    },
    "4-7": {
     "acc": 0.5333333333333333,
     "n": 15
    },
    "8-15": {
     "acc": 0.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.7142857142857143,
     "n": 28
    },
    "4-8k": {
     "acc": 0.55,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.6044776119402985,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6044776119402985,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.6419753086419753,
     "n": 81
    },
    "branch": {
     "acc": 0.5510204081632653,
     "n": 49
    },
    "done": {
     "acc": 0.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6282051282051282,
     "n": 78
    },
    "2-3": {
     "acc": 0.5405405405405406,
     "n": 37
    },
    "4-7": {
     "acc": 0.6666666666666666,
     "n": 18
    },
    "8-15": {
     "acc": 0.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.6712328767123288,
     "n": 73
    },
    "4-8k": {
     "acc": 0.5245901639344263,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.7619047619047619,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7619047619047619,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.7727272727272727,
     "n": 88
    },
    "branch": {
     "acc": 0.7735849056603774,
     "n": 53
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7671232876712328,
     "n": 73
    },
    "2-3": {
     "acc": 0.85,
     "n": 40
    },
    "4-7": {
     "acc": 0.6774193548387096,
     "n": 31
    },
    "8-15": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9090909090909091,
     "n": 22
    },
    "4-8k": {
     "acc": 0.736,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.7828947368421053,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7828947368421053,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.333333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.81,
     "n": 100
    },
    "branch": {
     "acc": 0.7608695652173914,
     "n": 46
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7678571428571429,
     "n": 56
    },
    "2-3": {
     "acc": 0.734375,
     "n": 64
    },
    "4-7": {
     "acc": 0.88,
     "n": 25
    },
    "8-15": {
     "acc": 1.0,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.82,
     "n": 50
    },
    "4-8k": {
     "acc": 0.7647058823529411,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.7452229299363057,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7452229299363057,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.333333333333333,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.7830188679245284,
     "n": 106
    },
    "branch": {
     "acc": 0.6888888888888889,
     "n": 45
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6896551724137931,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.7333333333333333,
     "n": 60
    },
    "4-7": {
     "acc": 0.8620689655172413,
     "n": 29
    },
    "8-15": {
     "acc": 0.7777777777777778,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8301886792452831,
     "n": 53
    },
    "4-8k": {
     "acc": 0.7019230769230769,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.6098654708520179,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6098654708520179,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.6201550387596899,
     "n": 129
    },
    "branch": {
     "acc": 0.6022727272727273,
     "n": 88
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.59375,
     "n": 96
    },
    "16-31": {
     "acc": 0.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.5925925925925926,
     "n": 81
    },
    "4-7": {
     "acc": 0.6923076923076923,
     "n": 39
    },
    "8-15": {
     "acc": 0.6666666666666666,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.647887323943662,
     "n": 142
    },
    "8-16k": {
     "acc": 0.5432098765432098,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.5981735159817352,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5981735159817352,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.666666666666667,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.6198347107438017,
     "n": 121
    },
    "branch": {
     "acc": 0.5760869565217391,
     "n": 92
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5660377358490566,
     "n": 106
    },
    "2-3": {
     "acc": 0.64,
     "n": 75
    },
    "4-7": {
     "acc": 0.5666666666666667,
     "n": 30
    },
    "8-15": {
     "acc": 0.75,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.5981735159817352,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.5621890547263682,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5621890547263682,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.5641025641025641,
     "n": 117
    },
    "branch": {
     "acc": 0.5512820512820513,
     "n": 78
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5324675324675324,
     "n": 77
    },
    "2-3": {
     "acc": 0.5753424657534246,
     "n": 73
    },
    "4-7": {
     "acc": 0.5384615384615384,
     "n": 39
    },
    "8-15": {
     "acc": 0.75,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.5621890547263682,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.7107438016528925,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7107438016528925,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.75,
     "n": 156
    },
    "branch": {
     "acc": 0.6578947368421053,
     "n": 76
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6986301369863014,
     "n": 73
    },
    "16-31": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "2-3": {
     "acc": 0.7126436781609196,
     "n": 87
    },
    "4-7": {
     "acc": 0.6727272727272727,
     "n": 55
    },
    "8-15": {
     "acc": 0.8333333333333334,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7107438016528925,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.7649572649572649,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7649572649572649,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8027210884353742,
     "n": 147
    },
    "branch": {
     "acc": 0.7272727272727273,
     "n": 77
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7567567567567568,
     "n": 74
    },
    "16-31": {
     "acc": 0.8888888888888888,
     "n": 9
    },
    "2-3": {
     "acc": 0.6885245901639344,
     "n": 61
    },
    "4-7": {
     "acc": 0.7936507936507936,
     "n": 63
    },
    "8-15": {
     "acc": 0.8518518518518519,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7649572649572649,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.6652719665271967,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6652719665271967,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 8.2,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7044025157232704,
     "n": 159
    },
    "branch": {
     "acc": 0.6,
     "n": 70
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.671875,
     "n": 64
    },
    "16-31": {
     "acc": 1.0,
     "n": 2
    },
    "2-3": {
     "acc": 0.7066666666666667,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.609375,
     "n": 64
    },
    "8-15": {
     "acc": 0.6363636363636364,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6652719665271967,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.5706666666666667,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5706666666666667,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6046511627906976,
     "n": 215
    },
    "branch": {
     "acc": 0.5266666666666666,
     "n": 150
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.4948453608247423,
     "n": 97
    },
    "16-31": {
     "acc": 0.8333333333333334,
     "n": 6
    },
    "2-3": {
     "acc": 0.5871559633027523,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.6036036036036037,
     "n": 111
    },
    "8-15": {
     "acc": 0.5686274509803921,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.5706666666666667,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.6084142394822006,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6084142394822006,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6140350877192983,
     "n": 171
    },
    "branch": {
     "acc": 0.609375,
     "n": 128
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6477272727272727,
     "n": 88
    },
    "16-31": {
     "acc": 0.16666666666666666,
     "n": 6
    },
    "2-3": {
     "acc": 0.6210526315789474,
     "n": 95
    },
    "4-7": {
     "acc": 0.5064935064935064,
     "n": 77
    },
    "8-15": {
     "acc": 0.7441860465116279,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8157894736842105,
     "n": 38
    },
    "8-16k": {
     "acc": 0.5793357933579336,
     "n": 271
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "openai/gpt-4.1-nano",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.5730337078651685,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5730337078651685,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.8,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.616504854368932,
     "n": 206
    },
    "branch": {
     "acc": 0.5142857142857142,
     "n": 140
    },
    "done": {
     "acc": 0.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5333333333333333,
     "n": 90
    },
    "16-31": {
     "acc": 0.625,
     "n": 16
    },
    "2-3": {
     "acc": 0.6041666666666666,
     "n": 96
    },
    "4-7": {
     "acc": 0.5596330275229358,
     "n": 109
    },
    "8-15": {
     "acc": 0.6,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.5730337078651685,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.8461538461538461,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8461538461538461,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 20.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.7631578947368421,
     "n": 76
    },
    "branch": {
     "acc": 0.96,
     "n": 50
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8648648648648649,
     "n": 74
    },
    "2-3": {
     "acc": 0.8372093023255814,
     "n": 43
    },
    "4-7": {
     "acc": 0.75,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9591836734693877,
     "n": 49
    },
    "4-8k": {
     "acc": 0.7777777777777778,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 0.954954954954955,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.954954954954955,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 24.0,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9324324324324325,
     "n": 74
    },
    "branch": {
     "acc": 1.0,
     "n": 33
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9452054794520548,
     "n": 73
    },
    "2-3": {
     "acc": 0.9666666666666667,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.954954954954955,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.9137931034482759,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9137931034482759,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 24.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8974358974358975,
     "n": 78
    },
    "branch": {
     "acc": 0.9411764705882353,
     "n": 34
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8888888888888888,
     "n": 54
    },
    "2-3": {
     "acc": 0.9166666666666666,
     "n": 48
    },
    "4-7": {
     "acc": 1.0,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9137931034482759,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.727810650887574,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.727810650887574,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 29.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.6565656565656566,
     "n": 99
    },
    "branch": {
     "acc": 0.8181818181818182,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6792452830188679,
     "n": 106
    },
    "2-3": {
     "acc": 0.85,
     "n": 40
    },
    "4-7": {
     "acc": 0.7272727272727273,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.727810650887574,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.8378378378378378,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8378378378378378,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8333333333333334,
     "n": 84
    },
    "branch": {
     "acc": 0.8333333333333334,
     "n": 60
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8064516129032258,
     "n": 93
    },
    "2-3": {
     "acc": 0.8717948717948718,
     "n": 39
    },
    "4-7": {
     "acc": 0.9333333333333333,
     "n": 15
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9642857142857143,
     "n": 28
    },
    "4-8k": {
     "acc": 0.8083333333333333,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.8432835820895522,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8432835820895522,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 13.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8271604938271605,
     "n": 81
    },
    "branch": {
     "acc": 0.8571428571428571,
     "n": 49
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9230769230769231,
     "n": 78
    },
    "2-3": {
     "acc": 0.7837837837837838,
     "n": 37
    },
    "4-7": {
     "acc": 0.6666666666666666,
     "n": 18
    },
    "8-15": {
     "acc": 0.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.8767123287671232,
     "n": 73
    },
    "4-8k": {
     "acc": 0.8032786885245902,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.8775510204081632,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8775510204081632,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 17.333333333333332,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.8522727272727273,
     "n": 88
    },
    "branch": {
     "acc": 0.9056603773584906,
     "n": 53
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.863013698630137,
     "n": 73
    },
    "2-3": {
     "acc": 0.925,
     "n": 40
    },
    "4-7": {
     "acc": 0.8387096774193549,
     "n": 31
    },
    "8-15": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 22
    },
    "4-8k": {
     "acc": 0.856,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.881578947368421,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.881578947368421,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.86,
     "n": 100
    },
    "branch": {
     "acc": 0.9130434782608695,
     "n": 46
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9107142857142857,
     "n": 56
    },
    "2-3": {
     "acc": 0.84375,
     "n": 64
    },
    "4-7": {
     "acc": 0.88,
     "n": 25
    },
    "8-15": {
     "acc": 1.0,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.94,
     "n": 50
    },
    "4-8k": {
     "acc": 0.8529411764705882,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.8853503184713376,
   "format_failure_rate": 0.012738853503184714,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.896774193548387,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 25.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.8773584905660378,
     "n": 106
    },
    "branch": {
     "acc": 0.9333333333333333,
     "n": 45
    },
    "done": {
     "acc": 0.3333333333333333,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8275862068965517,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.9166666666666666,
     "n": 60
    },
    "4-7": {
     "acc": 0.9655172413793104,
     "n": 29
    },
    "8-15": {
     "acc": 0.7777777777777778,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9811320754716981,
     "n": 53
    },
    "4-8k": {
     "acc": 0.8365384615384616,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.6905829596412556,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6905829596412556,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.6201550387596899,
     "n": 129
    },
    "branch": {
     "acc": 0.7840909090909091,
     "n": 88
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6875,
     "n": 96
    },
    "16-31": {
     "acc": 0.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.691358024691358,
     "n": 81
    },
    "4-7": {
     "acc": 0.717948717948718,
     "n": 39
    },
    "8-15": {
     "acc": 0.6666666666666666,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6905829596412556,
     "n": 223
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.7214611872146118,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7214611872146118,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.666666666666666,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.743801652892562,
     "n": 121
    },
    "branch": {
     "acc": 0.7065217391304348,
     "n": 92
    },
    "done": {
     "acc": 0.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6698113207547169,
     "n": 106
    },
    "2-3": {
     "acc": 0.7866666666666666,
     "n": 75
    },
    "4-7": {
     "acc": 0.7,
     "n": 30
    },
    "8-15": {
     "acc": 0.875,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7214611872146118,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.7313432835820896,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7313432835820896,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 8.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.7008547008547008,
     "n": 117
    },
    "branch": {
     "acc": 0.7692307692307693,
     "n": 78
    },
    "done": {
     "acc": 0.6666666666666666,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7532467532467533,
     "n": 77
    },
    "2-3": {
     "acc": 0.7123287671232876,
     "n": 73
    },
    "4-7": {
     "acc": 0.717948717948718,
     "n": 39
    },
    "8-15": {
     "acc": 0.75,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7313432835820896,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.7148760330578512,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7148760330578512,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.2,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 1,
    "3+": 4
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7051282051282052,
     "n": 156
    },
    "branch": {
     "acc": 0.7368421052631579,
     "n": 76
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6027397260273972,
     "n": 73
    },
    "16-31": {
     "acc": 0.8888888888888888,
     "n": 9
    },
    "2-3": {
     "acc": 0.7471264367816092,
     "n": 87
    },
    "4-7": {
     "acc": 0.7636363636363637,
     "n": 55
    },
    "8-15": {
     "acc": 0.7777777777777778,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7148760330578512,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.8076923076923077,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8076923076923077,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 8.2,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8231292517006803,
     "n": 147
    },
    "branch": {
     "acc": 0.7922077922077922,
     "n": 77
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8378378378378378,
     "n": 74
    },
    "16-31": {
     "acc": 0.8888888888888888,
     "n": 9
    },
    "2-3": {
     "acc": 0.7213114754098361,
     "n": 61
    },
    "4-7": {
     "acc": 0.8571428571428571,
     "n": 63
    },
    "8-15": {
     "acc": 0.7777777777777778,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8076923076923077,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.7447698744769874,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7447698744769874,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 11.0,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 4
   },
   "tasks_total": 5,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7484276729559748,
     "n": 159
    },
    "branch": {
     "acc": 0.7428571428571429,
     "n": 70
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.734375,
     "n": 64
    },
    "16-31": {
     "acc": 0.5,
     "n": 2
    },
    "2-3": {
     "acc": 0.7333333333333333,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.734375,
     "n": 64
    },
    "8-15": {
     "acc": 0.8181818181818182,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7447698744769874,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.6026666666666667,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6026666666666667,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.6139534883720931,
     "n": 215
    },
    "branch": {
     "acc": 0.5866666666666667,
     "n": 150
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5463917525773195,
     "n": 97
    },
    "16-31": {
     "acc": 0.8333333333333334,
     "n": 6
    },
    "2-3": {
     "acc": 0.6055045871559633,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.6396396396396397,
     "n": 111
    },
    "8-15": {
     "acc": 0.5882352941176471,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.6026666666666667,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.5533980582524272,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5533980582524272,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.6,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.47953216374269003,
     "n": 171
    },
    "branch": {
     "acc": 0.6484375,
     "n": 128
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5681818181818182,
     "n": 88
    },
    "16-31": {
     "acc": 0.16666666666666666,
     "n": 6
    },
    "2-3": {
     "acc": 0.6,
     "n": 95
    },
    "4-7": {
     "acc": 0.45454545454545453,
     "n": 77
    },
    "8-15": {
     "acc": 0.6511627906976745,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8333333333333334,
     "n": 36
    },
    "8-16k": {
     "acc": 0.5164835164835165,
     "n": 273
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "openai/gpt-4o-mini",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.5842696629213483,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.5842696629213483,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.5679611650485437,
     "n": 206
    },
    "branch": {
     "acc": 0.6071428571428571,
     "n": 140
    },
    "done": {
     "acc": 0.2,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5666666666666667,
     "n": 90
    },
    "16-31": {
     "acc": 0.5625,
     "n": 16
    },
    "2-3": {
     "acc": 0.6041666666666666,
     "n": 96
    },
    "4-7": {
     "acc": 0.5779816513761468,
     "n": 109
    },
    "8-15": {
     "acc": 0.6,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.5842696629213483,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 130,
   "accuracy": 0.9769230769230769,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9769230769230769,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 40.5,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9605263157894737,
     "n": 76
    },
    "branch": {
     "acc": 1.0,
     "n": 50
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9864864864864865,
     "n": 74
    },
    "2-3": {
     "acc": 0.9767441860465116,
     "n": 43
    },
    "4-7": {
     "acc": 0.9166666666666666,
     "n": 12
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 49
    },
    "4-8k": {
     "acc": 0.9629629629629629,
     "n": 81
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 111,
   "accuracy": 1.0,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 1.0,
   "task_completion_rate": 1.0,
   "mean_first_error_depth": 55.5,
   "task_error_dist": {
    "0": 2,
    "1": 0,
    "2": 0,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 2,
     "clean_x": 2
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 1.0,
     "n": 74
    },
    "branch": {
     "acc": 1.0,
     "n": 33
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 1.0,
     "n": 73
    },
    "2-3": {
     "acc": 1.0,
     "n": 30
    },
    "4-7": {
     "acc": 1.0,
     "n": 7
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 111
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b50-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 116,
   "accuracy": 0.9741379310344828,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9741379310344828,
   "task_completion_rate": 0.5,
   "mean_first_error_depth": 56.0,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 2,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9615384615384616,
     "n": 78
    },
    "branch": {
     "acc": 1.0,
     "n": 34
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9629629629629629,
     "n": 54
    },
    "2-3": {
     "acc": 1.0,
     "n": 48
    },
    "4-7": {
     "acc": 0.9285714285714286,
     "n": 14
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9741379310344828,
     "n": 116
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 169,
   "accuracy": 0.9112426035502958,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9112426035502958,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 45.5,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8686868686868687,
     "n": 99
    },
    "branch": {
     "acc": 0.9696969696969697,
     "n": 66
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8962264150943396,
     "n": 106
    },
    "2-3": {
     "acc": 0.925,
     "n": 40
    },
    "4-7": {
     "acc": 0.9545454545454546,
     "n": 22
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9112426035502958,
     "n": 169
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 148,
   "accuracy": 0.9121621621621622,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9121621621621622,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 16.0,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.8928571428571429,
     "n": 84
    },
    "branch": {
     "acc": 0.9333333333333333,
     "n": 60
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9032258064516129,
     "n": 93
    },
    "2-3": {
     "acc": 0.9230769230769231,
     "n": 39
    },
    "4-7": {
     "acc": 0.9333333333333333,
     "n": 15
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9642857142857143,
     "n": 28
    },
    "4-8k": {
     "acc": 0.9,
     "n": 120
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n2-m32-b80-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 2,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 134,
   "accuracy": 0.9776119402985075,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9776119402985075,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 43.5,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 2,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 2
    },
    "advance": {
     "acc": 0.9753086419753086,
     "n": 81
    },
    "branch": {
     "acc": 0.9795918367346939,
     "n": 49
    },
    "done": {
     "acc": 1.0,
     "n": 2
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9871794871794872,
     "n": 78
    },
    "2-3": {
     "acc": 0.972972972972973,
     "n": 37
    },
    "4-7": {
     "acc": 0.9444444444444444,
     "n": 18
    },
    "8-15": {
     "acc": 1.0,
     "n": 1
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 73
    },
    "4-8k": {
     "acc": 0.9508196721311475,
     "n": 61
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 147,
   "accuracy": 0.9659863945578231,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9659863945578231,
   "task_completion_rate": 0.6666666666666666,
   "mean_first_error_depth": 32.333333333333336,
   "task_error_dist": {
    "0": 2,
    "1": 0,
    "2": 0,
    "3+": 1
   },
   "tasks_total": 3,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 2,
     "clean": 1,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9431818181818182,
     "n": 88
    },
    "branch": {
     "acc": 1.0,
     "n": 53
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9863013698630136,
     "n": 73
    },
    "2-3": {
     "acc": 0.975,
     "n": 40
    },
    "4-7": {
     "acc": 0.9032258064516129,
     "n": 31
    },
    "8-15": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 1.0,
     "n": 22
    },
    "4-8k": {
     "acc": 0.96,
     "n": 125
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 152,
   "accuracy": 0.9736842105263158,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9736842105263158,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 26.333333333333332,
   "task_error_dist": {
    "0": 0,
    "1": 2,
    "2": 1,
    "3+": 0
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.98,
     "n": 100
    },
    "branch": {
     "acc": 0.9565217391304348,
     "n": 46
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9821428571428571,
     "n": 56
    },
    "2-3": {
     "acc": 0.96875,
     "n": 64
    },
    "4-7": {
     "acc": 0.96,
     "n": 25
    },
    "8-15": {
     "acc": 1.0,
     "n": 7
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.98,
     "n": 50
    },
    "4-8k": {
     "acc": 0.9705882352941176,
     "n": 102
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b50-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 157,
   "accuracy": 0.9681528662420382,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9681528662420382,
   "task_completion_rate": 0.3333333333333333,
   "mean_first_error_depth": 37.333333333333336,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 1,
    "3+": 1
   },
   "tasks_total": 3,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.9528301886792453,
     "n": 106
    },
    "branch": {
     "acc": 1.0,
     "n": 45
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9137931034482759,
     "n": 58
    },
    "16-31": {
     "acc": 1.0,
     "n": 1
    },
    "2-3": {
     "acc": 1.0,
     "n": 60
    },
    "4-7": {
     "acc": 1.0,
     "n": 29
    },
    "8-15": {
     "acc": 1.0,
     "n": 9
    }
   },
   "accuracy_by_context": {
    "2-4k": {
     "acc": 0.9811320754716981,
     "n": 53
    },
    "4-8k": {
     "acc": 0.9615384615384616,
     "n": 104
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 223,
   "accuracy": 0.8385650224215246,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8385650224215246,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 29.666666666666668,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.751937984496124,
     "n": 129
    },
    "branch": {
     "acc": 0.9545454545454546,
     "n": 88
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8229166666666666,
     "n": 96
    },
    "16-31": {
     "acc": 0.0,
     "n": 1
    },
    "2-3": {
     "acc": 0.8518518518518519,
     "n": 81
    },
    "4-7": {
     "acc": 0.8461538461538461,
     "n": 39
    },
    "8-15": {
     "acc": 1.0,
     "n": 6
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8385650224215246,
     "n": 223
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 219,
   "accuracy": 0.8356164383561644,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8356164383561644,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.666666666666666,
   "task_error_dist": {
    "0": 0,
    "1": 1,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.8099173553719008,
     "n": 121
    },
    "branch": {
     "acc": 0.8586956521739131,
     "n": 92
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8490566037735849,
     "n": 106
    },
    "2-3": {
     "acc": 0.84,
     "n": 75
    },
    "4-7": {
     "acc": 0.7666666666666667,
     "n": 30
    },
    "8-15": {
     "acc": 0.875,
     "n": 8
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8356164383561644,
     "n": 219
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n3-m32-b80-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 3,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 201,
   "accuracy": 0.8059701492537313,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8059701492537313,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 12.666666666666666,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 3
   },
   "tasks_total": 3,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 3,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 3
    },
    "advance": {
     "acc": 0.717948717948718,
     "n": 117
    },
    "branch": {
     "acc": 0.9230769230769231,
     "n": 78
    },
    "done": {
     "acc": 1.0,
     "n": 3
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7792207792207793,
     "n": 77
    },
    "2-3": {
     "acc": 0.7808219178082192,
     "n": 73
    },
    "4-7": {
     "acc": 0.9230769230769231,
     "n": 39
    },
    "8-15": {
     "acc": 0.75,
     "n": 12
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8059701492537313,
     "n": 201
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 242,
   "accuracy": 0.9132231404958677,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9132231404958677,
   "task_completion_rate": 0.4,
   "mean_first_error_depth": 28.6,
   "task_error_dist": {
    "0": 2,
    "1": 1,
    "2": 0,
    "3+": 2
   },
   "tasks_total": 5,
   "tasks_clean": 2,
   "tasks_clean_excl_done": 2,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 1,
     "clean_x": 1
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8782051282051282,
     "n": 156
    },
    "branch": {
     "acc": 0.9736842105263158,
     "n": 76
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.8767123287671232,
     "n": 73
    },
    "16-31": {
     "acc": 1.0,
     "n": 9
    },
    "2-3": {
     "acc": 0.9310344827586207,
     "n": 87
    },
    "4-7": {
     "acc": 0.9090909090909091,
     "n": 55
    },
    "8-15": {
     "acc": 0.9444444444444444,
     "n": 18
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9132231404958677,
     "n": 242
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 234,
   "accuracy": 0.9316239316239316,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.9316239316239316,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 21.0,
   "task_error_dist": {
    "0": 1,
    "1": 1,
    "2": 1,
    "3+": 2
   },
   "tasks_total": 5,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.9251700680272109,
     "n": 147
    },
    "branch": {
     "acc": 0.935064935064935,
     "n": 77
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.9594594594594594,
     "n": 74
    },
    "16-31": {
     "acc": 1.0,
     "n": 9
    },
    "2-3": {
     "acc": 0.8852459016393442,
     "n": 61
    },
    "4-7": {
     "acc": 0.9682539682539683,
     "n": 63
    },
    "8-15": {
     "acc": 0.8518518518518519,
     "n": 27
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9316239316239316,
     "n": 234
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b50-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.5,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 239,
   "accuracy": 0.8619246861924686,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8619246861924686,
   "task_completion_rate": 0.2,
   "mean_first_error_depth": 24.2,
   "task_error_dist": {
    "0": 1,
    "1": 0,
    "2": 1,
    "3+": 3
   },
   "tasks_total": 5,
   "tasks_clean": 1,
   "tasks_clean_excl_done": 1,
   "task_length_dist": {
    "31+": {
     "tasks": 4,
     "clean": 0,
     "clean_x": 0
    },
    "15-22": {
     "tasks": 1,
     "clean": 1,
     "clean_x": 1
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.8553459119496856,
     "n": 159
    },
    "branch": {
     "acc": 0.8571428571428571,
     "n": 70
    },
    "done": {
     "acc": 1.0,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.875,
     "n": 64
    },
    "16-31": {
     "acc": 1.0,
     "n": 2
    },
    "2-3": {
     "acc": 0.8666666666666667,
     "n": 75
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.8125,
     "n": 64
    },
    "8-15": {
     "acc": 0.9090909090909091,
     "n": 33
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8619246861924686,
     "n": 239
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s1",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 1,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 375,
   "accuracy": 0.6133333333333333,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.6133333333333333,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.49767441860465117,
     "n": 215
    },
    "branch": {
     "acc": 0.7733333333333333,
     "n": 150
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5773195876288659,
     "n": 97
    },
    "16-31": {
     "acc": 0.5,
     "n": 6
    },
    "2-3": {
     "acc": 0.5963302752293578,
     "n": 109
    },
    "32+": {
     "acc": 1.0,
     "n": 1
    },
    "4-7": {
     "acc": 0.6306306306306306,
     "n": 111
    },
    "8-15": {
     "acc": 0.6862745098039216,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.6133333333333333,
     "n": 375
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s2",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 2,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 309,
   "accuracy": 0.7928802588996764,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7928802588996764,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 15.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.7251461988304093,
     "n": 171
    },
    "branch": {
     "acc": 0.8828125,
     "n": 128
    },
    "done": {
     "acc": 0.6,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.75,
     "n": 88
    },
    "16-31": {
     "acc": 0.6666666666666666,
     "n": 6
    },
    "2-3": {
     "acc": 0.8526315789473684,
     "n": 95
    },
    "4-7": {
     "acc": 0.7662337662337663,
     "n": 77
    },
    "8-15": {
     "acc": 0.813953488372093,
     "n": 43
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.9722222222222222,
     "n": 36
    },
    "8-16k": {
     "acc": 0.7692307692307693,
     "n": 273
    }
   },
   "truncated": false,
   "error": null
  },
  {
   "episode_id": "assembly+pipeline+repair-n5-m32-b80-uniform-s3",
   "agent": "qwen/qwen3-30b-a3b-instruct-2507",
   "config": {
    "categories": [
     "repair",
     "pipeline",
     "assembly"
    ],
    "n_tasks": 5,
    "steps_mean": 32,
    "branch_prob": 0.8,
    "schedule": "uniform",
    "seed": 3,
    "zipf_s": 1.2,
    "history": "full"
   },
   "n_events": 356,
   "accuracy": 0.648876404494382,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.648876404494382,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 20.4,
   "task_error_dist": {
    "0": 0,
    "1": 0,
    "2": 0,
    "3+": 5
   },
   "tasks_total": 5,
   "tasks_clean": 0,
   "tasks_clean_excl_done": 0,
   "task_length_dist": {
    "31+": {
     "tasks": 5,
     "clean": 0,
     "clean_x": 0
    }
   },
   "accuracy_by_kind": {
    "start": {
     "acc": 1.0,
     "n": 5
    },
    "advance": {
     "acc": 0.5339805825242718,
     "n": 206
    },
    "branch": {
     "acc": 0.8142857142857143,
     "n": 140
    },
    "done": {
     "acc": 0.4,
     "n": 5
    }
   },
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6666666666666666,
     "n": 90
    },
    "16-31": {
     "acc": 0.6875,
     "n": 16
    },
    "2-3": {
     "acc": 0.5520833333333334,
     "n": 96
    },
    "4-7": {
     "acc": 0.7247706422018348,
     "n": 109
    },
    "8-15": {
     "acc": 0.6222222222222222,
     "n": 45
    }
   },
   "accuracy_by_context": {
    "8-16k": {
     "acc": 0.648876404494382,
     "n": 356
    }
   },
   "truncated": false,
   "error": null
  }
 ]
};
