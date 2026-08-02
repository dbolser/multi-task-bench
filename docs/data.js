window.MTB_DATA = {
 "commit": "5300528",
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
   "accuracy": 0.8580441640378549,
   "format_failure_rate": 0.006309148264984227,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.8634920634920635,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 0.0,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.673469387755102,
     "n": 49
    },
    "16-31": {
     "acc": 0.8648648648648649,
     "n": 37
    },
    "2-3": {
     "acc": 0.8135593220338984,
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
     "acc": 0.9166666666666666,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8625,
     "n": 240
    },
    "8-16k": {
     "acc": 0.8441558441558441,
     "n": 77
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
   "accuracy": 0.8675078864353313,
   "format_failure_rate": 0.00946372239747634,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.8757961783439491,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 11.4,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7375,
     "n": 80
    },
    "16-31": {
     "acc": 0.9090909090909091,
     "n": 11
    },
    "2-3": {
     "acc": 0.8658536585365854,
     "n": 82
    },
    "32+": {
     "acc": 0.9285714285714286,
     "n": 14
    },
    "4-7": {
     "acc": 0.9240506329113924,
     "n": 79
    },
    "8-15": {
     "acc": 0.9607843137254902,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.8612244897959184,
     "n": 245
    },
    "8-16k": {
     "acc": 0.8888888888888888,
     "n": 72
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
   "accuracy": 0.6828859060402684,
   "format_failure_rate": 0.0016778523489932886,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.6840336134453782,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.8,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.47368421052631576,
     "n": 76
    },
    "16-31": {
     "acc": 0.776,
     "n": 125
    },
    "2-3": {
     "acc": 0.575,
     "n": 80
    },
    "32+": {
     "acc": 0.8433734939759037,
     "n": 83
    },
    "4-7": {
     "acc": 0.6767676767676768,
     "n": 99
    },
    "8-15": {
     "acc": 0.6842105263157895,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.2926829268292683,
     "n": 41
    },
    "8-16k": {
     "acc": 0.7117117117117117,
     "n": 555
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
   "accuracy": 0.7281879194630873,
   "format_failure_rate": 0.0016778523489932886,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.7294117647058823,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.5,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6736842105263158,
     "n": 95
    },
    "16-31": {
     "acc": 0.7831325301204819,
     "n": 83
    },
    "2-3": {
     "acc": 0.6111111111111112,
     "n": 108
    },
    "32+": {
     "acc": 0.8387096774193549,
     "n": 62
    },
    "4-7": {
     "acc": 0.7874015748031497,
     "n": 127
    },
    "8-15": {
     "acc": 0.71900826446281,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8611111111111112,
     "n": 36
    },
    "8-16k": {
     "acc": 0.7196428571428571,
     "n": 560
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
   "accuracy": 0.8062770562770563,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.8062770562770563,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 10.9,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7931034482758621,
     "n": 58
    },
    "16-31": {
     "acc": 0.803347280334728,
     "n": 239
    },
    "2-3": {
     "acc": 0.7325581395348837,
     "n": 86
    },
    "32+": {
     "acc": 0.8391304347826087,
     "n": 230
    },
    "4-7": {
     "acc": 0.782608695652174,
     "n": 115
    },
    "8-15": {
     "acc": 0.8214285714285714,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.8062770562770563,
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
   "accuracy": 0.6558441558441559,
   "format_failure_rate": 0.047619047619047616,
   "misformatted_but_content_match": 13,
   "accuracy_answered": 0.6886363636363636,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 0.0,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.171875,
     "n": 128
    },
    "16-31": {
     "acc": 0.7647058823529411,
     "n": 187
    },
    "2-3": {
     "acc": 0.6727272727272727,
     "n": 110
    },
    "32+": {
     "acc": 0.8031496062992126,
     "n": 127
    },
    "4-7": {
     "acc": 0.675531914893617,
     "n": 188
    },
    "8-15": {
     "acc": 0.75,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6558441558441559,
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
   "accuracy": 0.5741324921135647,
   "format_failure_rate": 0.00946372239747634,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.5796178343949044,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 2.7,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.2857142857142857,
     "n": 49
    },
    "16-31": {
     "acc": 0.7567567567567568,
     "n": 37
    },
    "2-3": {
     "acc": 0.4067796610169492,
     "n": 59
    },
    "32+": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "4-7": {
     "acc": 0.6708860759493671,
     "n": 79
    },
    "8-15": {
     "acc": 0.6666666666666666,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6458333333333334,
     "n": 240
    },
    "8-16k": {
     "acc": 0.35064935064935066,
     "n": 77
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
   "accuracy": 0.41009463722397477,
   "format_failure_rate": 0.04416403785488959,
   "misformatted_but_content_match": 12,
   "accuracy_answered": 0.429042904290429,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 2.7,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.2125,
     "n": 80
    },
    "16-31": {
     "acc": 0.7272727272727273,
     "n": 11
    },
    "2-3": {
     "acc": 0.2926829268292683,
     "n": 82
    },
    "32+": {
     "acc": 0.7857142857142857,
     "n": 14
    },
    "4-7": {
     "acc": 0.5063291139240507,
     "n": 79
    },
    "8-15": {
     "acc": 0.5882352941176471,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.40816326530612246,
     "n": 245
    },
    "8-16k": {
     "acc": 0.4166666666666667,
     "n": 72
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
   "accuracy": 0.662751677852349,
   "format_failure_rate": 0.003355704697986577,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.664983164983165,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.95,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.39473684210526316,
     "n": 76
    },
    "16-31": {
     "acc": 0.832,
     "n": 125
    },
    "2-3": {
     "acc": 0.5125,
     "n": 80
    },
    "32+": {
     "acc": 0.7469879518072289,
     "n": 83
    },
    "4-7": {
     "acc": 0.7171717171717171,
     "n": 99
    },
    "8-15": {
     "acc": 0.6541353383458647,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.4107142857142857,
     "n": 56
    },
    "8-16k": {
     "acc": 0.6888888888888889,
     "n": 540
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
   "accuracy": 0.5620805369127517,
   "format_failure_rate": 0.0050335570469798654,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.5649241146711635,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.35,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.3157894736842105,
     "n": 95
    },
    "16-31": {
     "acc": 0.7469879518072289,
     "n": 83
    },
    "2-3": {
     "acc": 0.3148148148148148,
     "n": 108
    },
    "32+": {
     "acc": 0.8548387096774194,
     "n": 62
    },
    "4-7": {
     "acc": 0.6141732283464567,
     "n": 127
    },
    "8-15": {
     "acc": 0.6446280991735537,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.2222222222222222,
     "n": 36
    },
    "8-16k": {
     "acc": 0.5839285714285715,
     "n": 560
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
   "accuracy": 0.7251082251082251,
   "format_failure_rate": 0.0,
   "misformatted_but_content_match": 0,
   "accuracy_answered": 0.7251082251082251,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.566666666666666,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6896551724137931,
     "n": 58
    },
    "16-31": {
     "acc": 0.7698744769874477,
     "n": 239
    },
    "2-3": {
     "acc": 0.5813953488372093,
     "n": 86
    },
    "32+": {
     "acc": 0.7391304347826086,
     "n": 230
    },
    "4-7": {
     "acc": 0.6521739130434783,
     "n": 115
    },
    "8-15": {
     "acc": 0.7704081632653061,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.7251082251082251,
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
   "accuracy": 0.6341991341991342,
   "format_failure_rate": 0.0010822510822510823,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.6348862405200434,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.3,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.25,
     "n": 128
    },
    "16-31": {
     "acc": 0.7379679144385026,
     "n": 187
    },
    "2-3": {
     "acc": 0.5181818181818182,
     "n": 110
    },
    "32+": {
     "acc": 0.7874015748031497,
     "n": 127
    },
    "4-7": {
     "acc": 0.6808510638297872,
     "n": 188
    },
    "8-15": {
     "acc": 0.7119565217391305,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6341991341991342,
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
   "accuracy": 0.6340694006309149,
   "format_failure_rate": 0.015772870662460567,
   "misformatted_but_content_match": 5,
   "accuracy_answered": 0.6442307692307693,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 1.5,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.24489795918367346,
     "n": 49
    },
    "16-31": {
     "acc": 0.8108108108108109,
     "n": 37
    },
    "2-3": {
     "acc": 0.4745762711864407,
     "n": 59
    },
    "32+": {
     "acc": 0.6666666666666666,
     "n": 9
    },
    "4-7": {
     "acc": 0.759493670886076,
     "n": 79
    },
    "8-15": {
     "acc": 0.7738095238095238,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7375,
     "n": 240
    },
    "8-16k": {
     "acc": 0.3116883116883117,
     "n": 77
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
   "accuracy": 0.39747634069400634,
   "format_failure_rate": 0.056782334384858045,
   "misformatted_but_content_match": 12,
   "accuracy_answered": 0.4214046822742475,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 2.6,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.1875,
     "n": 80
    },
    "16-31": {
     "acc": 0.7272727272727273,
     "n": 11
    },
    "2-3": {
     "acc": 0.35365853658536583,
     "n": 82
    },
    "32+": {
     "acc": 0.7857142857142857,
     "n": 14
    },
    "4-7": {
     "acc": 0.379746835443038,
     "n": 79
    },
    "8-15": {
     "acc": 0.6470588235294118,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.42448979591836733,
     "n": 245
    },
    "8-16k": {
     "acc": 0.3055555555555556,
     "n": 72
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
   "accuracy": 0.6577181208053692,
   "format_failure_rate": 0.0016778523489932886,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.6588235294117647,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.15,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.3815789473684211,
     "n": 76
    },
    "16-31": {
     "acc": 0.816,
     "n": 125
    },
    "2-3": {
     "acc": 0.45,
     "n": 80
    },
    "32+": {
     "acc": 0.8433734939759037,
     "n": 83
    },
    "4-7": {
     "acc": 0.6363636363636364,
     "n": 99
    },
    "8-15": {
     "acc": 0.6917293233082706,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.1951219512195122,
     "n": 41
    },
    "8-16k": {
     "acc": 0.6918918918918919,
     "n": 555
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
   "accuracy": 0.5335570469798657,
   "format_failure_rate": 0.0050335570469798654,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.5362563237774031,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.2,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.25263157894736843,
     "n": 95
    },
    "16-31": {
     "acc": 0.7590361445783133,
     "n": 83
    },
    "2-3": {
     "acc": 0.23148148148148148,
     "n": 108
    },
    "32+": {
     "acc": 0.8870967741935484,
     "n": 62
    },
    "4-7": {
     "acc": 0.5354330708661418,
     "n": 127
    },
    "8-15": {
     "acc": 0.6859504132231405,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.21951219512195122,
     "n": 41
    },
    "8-16k": {
     "acc": 0.5567567567567567,
     "n": 555
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
   "accuracy": 0.6742424242424242,
   "format_failure_rate": 0.03571428571428571,
   "misformatted_but_content_match": 29,
   "accuracy_answered": 0.6992143658810326,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.766666666666667,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5172413793103449,
     "n": 58
    },
    "16-31": {
     "acc": 0.7489539748953975,
     "n": 239
    },
    "2-3": {
     "acc": 0.29069767441860467,
     "n": 86
    },
    "32+": {
     "acc": 0.7521739130434782,
     "n": 230
    },
    "4-7": {
     "acc": 0.6,
     "n": 115
    },
    "8-15": {
     "acc": 0.75,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6742424242424242,
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
   "accuracy": 0.6363636363636364,
   "format_failure_rate": 0.007575757575757576,
   "misformatted_but_content_match": 4,
   "accuracy_answered": 0.6412213740458015,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.9,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.296875,
     "n": 128
    },
    "16-31": {
     "acc": 0.7379679144385026,
     "n": 187
    },
    "2-3": {
     "acc": 0.41818181818181815,
     "n": 110
    },
    "32+": {
     "acc": 0.8110236220472441,
     "n": 127
    },
    "4-7": {
     "acc": 0.6648936170212766,
     "n": 188
    },
    "8-15": {
     "acc": 0.75,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6363636363636364,
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
   "accuracy": 0.48264984227129337,
   "format_failure_rate": 0.04416403785488959,
   "misformatted_but_content_match": 9,
   "accuracy_answered": 0.504950495049505,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 2.5,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.1836734693877551,
     "n": 49
    },
    "16-31": {
     "acc": 0.7567567567567568,
     "n": 37
    },
    "2-3": {
     "acc": 0.2542372881355932,
     "n": 59
    },
    "32+": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "4-7": {
     "acc": 0.5822784810126582,
     "n": 79
    },
    "8-15": {
     "acc": 0.5714285714285714,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.5666666666666667,
     "n": 240
    },
    "8-16k": {
     "acc": 0.22077922077922077,
     "n": 77
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
   "accuracy": 0.2807570977917981,
   "format_failure_rate": 0.34069400630914826,
   "misformatted_but_content_match": 55,
   "accuracy_answered": 0.4258373205741627,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 1.5,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.1125,
     "n": 80
    },
    "16-31": {
     "acc": 0.6363636363636364,
     "n": 11
    },
    "2-3": {
     "acc": 0.14634146341463414,
     "n": 82
    },
    "32+": {
     "acc": 0.6428571428571429,
     "n": 14
    },
    "4-7": {
     "acc": 0.31645569620253167,
     "n": 79
    },
    "8-15": {
     "acc": 0.5294117647058824,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.328,
     "n": 250
    },
    "8-16k": {
     "acc": 0.1044776119402985,
     "n": 67
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
   "accuracy": 0.5318791946308725,
   "format_failure_rate": 0.015100671140939598,
   "misformatted_but_content_match": 7,
   "accuracy_answered": 0.5400340715502555,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 1.1,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.15789473684210525,
     "n": 76
    },
    "16-31": {
     "acc": 0.8,
     "n": 125
    },
    "2-3": {
     "acc": 0.2875,
     "n": 80
    },
    "32+": {
     "acc": 0.7349397590361446,
     "n": 83
    },
    "4-7": {
     "acc": 0.47474747474747475,
     "n": 99
    },
    "8-15": {
     "acc": 0.556390977443609,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.13114754098360656,
     "n": 61
    },
    "8-16k": {
     "acc": 0.577570093457944,
     "n": 535
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
   "accuracy": 0.5,
   "format_failure_rate": 0.050335570469798654,
   "misformatted_but_content_match": 17,
   "accuracy_answered": 0.5265017667844523,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.05,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.29473684210526313,
     "n": 95
    },
    "16-31": {
     "acc": 0.7108433734939759,
     "n": 83
    },
    "2-3": {
     "acc": 0.23148148148148148,
     "n": 108
    },
    "32+": {
     "acc": 0.8387096774193549,
     "n": 62
    },
    "4-7": {
     "acc": 0.49606299212598426,
     "n": 127
    },
    "8-15": {
     "acc": 0.5867768595041323,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.10714285714285714,
     "n": 56
    },
    "8-16k": {
     "acc": 0.5407407407407407,
     "n": 540
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
   "accuracy": 0.6623376623376623,
   "format_failure_rate": 0.012987012987012988,
   "misformatted_but_content_match": 8,
   "accuracy_answered": 0.6710526315789473,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.3,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5344827586206896,
     "n": 58
    },
    "16-31": {
     "acc": 0.7531380753138075,
     "n": 239
    },
    "2-3": {
     "acc": 0.36046511627906974,
     "n": 86
    },
    "32+": {
     "acc": 0.7217391304347827,
     "n": 230
    },
    "4-7": {
     "acc": 0.5043478260869565,
     "n": 115
    },
    "8-15": {
     "acc": 0.7448979591836735,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.6623376623376623,
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
   "accuracy": 0.5562770562770563,
   "format_failure_rate": 0.0367965367965368,
   "misformatted_but_content_match": 14,
   "accuracy_answered": 0.5775280898876405,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 2.6,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.1640625,
     "n": 128
    },
    "16-31": {
     "acc": 0.7219251336898396,
     "n": 187
    },
    "2-3": {
     "acc": 0.35454545454545455,
     "n": 110
    },
    "32+": {
     "acc": 0.7559055118110236,
     "n": 127
    },
    "4-7": {
     "acc": 0.5319148936170213,
     "n": 188
    },
    "8-15": {
     "acc": 0.6684782608695652,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.5562770562770563,
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
   "accuracy": 0.6845425867507886,
   "format_failure_rate": 0.012618296529968454,
   "misformatted_but_content_match": 4,
   "accuracy_answered": 0.6932907348242812,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 7.5,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.3469387755102041,
     "n": 49
    },
    "16-31": {
     "acc": 0.7567567567567568,
     "n": 37
    },
    "2-3": {
     "acc": 0.5932203389830508,
     "n": 59
    },
    "32+": {
     "acc": 1.0,
     "n": 9
    },
    "4-7": {
     "acc": 0.7848101265822784,
     "n": 79
    },
    "8-15": {
     "acc": 0.7857142857142857,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.7555555555555555,
     "n": 225
    },
    "8-16k": {
     "acc": 0.5108695652173914,
     "n": 92
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
   "accuracy": 0.5583596214511041,
   "format_failure_rate": 0.0473186119873817,
   "misformatted_but_content_match": 12,
   "accuracy_answered": 0.5860927152317881,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 4.0,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.35,
     "n": 80
    },
    "16-31": {
     "acc": 0.9090909090909091,
     "n": 11
    },
    "2-3": {
     "acc": 0.4878048780487805,
     "n": 82
    },
    "32+": {
     "acc": 0.8571428571428571,
     "n": 14
    },
    "4-7": {
     "acc": 0.6582278481012658,
     "n": 79
    },
    "8-15": {
     "acc": 0.6862745098039216,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6085106382978723,
     "n": 235
    },
    "8-16k": {
     "acc": 0.4146341463414634,
     "n": 82
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
   "accuracy": 0.709731543624161,
   "format_failure_rate": 0.0050335570469798654,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.7133220910623946,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.6,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.3815789473684211,
     "n": 76
    },
    "16-31": {
     "acc": 0.872,
     "n": 125
    },
    "2-3": {
     "acc": 0.6625,
     "n": 80
    },
    "32+": {
     "acc": 0.7951807228915663,
     "n": 83
    },
    "4-7": {
     "acc": 0.7272727272727273,
     "n": 99
    },
    "8-15": {
     "acc": 0.706766917293233,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.4090909090909091,
     "n": 66
    },
    "8-16k": {
     "acc": 0.7471698113207547,
     "n": 530
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
   "accuracy": 0.7416107382550335,
   "format_failure_rate": 0.013422818791946308,
   "misformatted_but_content_match": 5,
   "accuracy_answered": 0.7517006802721088,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 8.15,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.6526315789473685,
     "n": 95
    },
    "16-31": {
     "acc": 0.8192771084337349,
     "n": 83
    },
    "2-3": {
     "acc": 0.6296296296296297,
     "n": 108
    },
    "32+": {
     "acc": 0.8870967741935484,
     "n": 62
    },
    "4-7": {
     "acc": 0.7716535433070866,
     "n": 127
    },
    "8-15": {
     "acc": 0.7520661157024794,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.5909090909090909,
     "n": 66
    },
    "8-16k": {
     "acc": 0.7603773584905661,
     "n": 530
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
   "accuracy": 0.7564935064935064,
   "format_failure_rate": 0.0021645021645021645,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.7581344902386117,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.833333333333333,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.7068965517241379,
     "n": 58
    },
    "16-31": {
     "acc": 0.7907949790794979,
     "n": 239
    },
    "2-3": {
     "acc": 0.6744186046511628,
     "n": 86
    },
    "32+": {
     "acc": 0.7521739130434782,
     "n": 230
    },
    "4-7": {
     "acc": 0.6956521739130435,
     "n": 115
    },
    "8-15": {
     "acc": 0.8061224489795918,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.7564935064935064,
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
   "accuracy": 0.698051948051948,
   "format_failure_rate": 0.00974025974025974,
   "misformatted_but_content_match": 5,
   "accuracy_answered": 0.7049180327868853,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 9.366666666666667,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.359375,
     "n": 128
    },
    "16-31": {
     "acc": 0.7754010695187166,
     "n": 187
    },
    "2-3": {
     "acc": 0.6909090909090909,
     "n": 110
    },
    "32+": {
     "acc": 0.8110236220472441,
     "n": 127
    },
    "4-7": {
     "acc": 0.723404255319149,
     "n": 188
    },
    "8-15": {
     "acc": 0.7554347826086957,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.698051948051948,
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
   "accuracy": 0.5583596214511041,
   "format_failure_rate": 0.00946372239747634,
   "misformatted_but_content_match": 3,
   "accuracy_answered": 0.5636942675159236,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 3.8,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.30612244897959184,
     "n": 49
    },
    "16-31": {
     "acc": 0.8108108108108109,
     "n": 37
    },
    "2-3": {
     "acc": 0.2711864406779661,
     "n": 59
    },
    "32+": {
     "acc": 0.7777777777777778,
     "n": 9
    },
    "4-7": {
     "acc": 0.6582278481012658,
     "n": 79
    },
    "8-15": {
     "acc": 0.6785714285714286,
     "n": 84
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.6375,
     "n": 240
    },
    "8-16k": {
     "acc": 0.3116883116883117,
     "n": 77
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
   "accuracy": 0.35962145110410093,
   "format_failure_rate": 0.04100946372239748,
   "misformatted_but_content_match": 9,
   "accuracy_answered": 0.375,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 3.2,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.15,
     "n": 80
    },
    "16-31": {
     "acc": 0.7272727272727273,
     "n": 11
    },
    "2-3": {
     "acc": 0.1951219512195122,
     "n": 82
    },
    "32+": {
     "acc": 0.8571428571428571,
     "n": 14
    },
    "4-7": {
     "acc": 0.4177215189873418,
     "n": 79
    },
    "8-15": {
     "acc": 0.6470588235294118,
     "n": 51
    }
   },
   "accuracy_by_context": {
    "4-8k": {
     "acc": 0.39591836734693875,
     "n": 245
    },
    "8-16k": {
     "acc": 0.2361111111111111,
     "n": 72
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
   "accuracy": 0.5771812080536913,
   "format_failure_rate": 0.0016778523489932886,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.5781512605042017,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 5.8,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.32894736842105265,
     "n": 76
    },
    "16-31": {
     "acc": 0.8,
     "n": 125
    },
    "2-3": {
     "acc": 0.2,
     "n": 80
    },
    "32+": {
     "acc": 0.7831325301204819,
     "n": 83
    },
    "4-7": {
     "acc": 0.5353535353535354,
     "n": 99
    },
    "8-15": {
     "acc": 0.6390977443609023,
     "n": 133
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.14634146341463414,
     "n": 41
    },
    "8-16k": {
     "acc": 0.609009009009009,
     "n": 555
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
   "accuracy": 0.5436241610738255,
   "format_failure_rate": 0.06208053691275168,
   "misformatted_but_content_match": 22,
   "accuracy_answered": 0.5796064400715564,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.3,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.2736842105263158,
     "n": 95
    },
    "16-31": {
     "acc": 0.7710843373493976,
     "n": 83
    },
    "2-3": {
     "acc": 0.18518518518518517,
     "n": 108
    },
    "32+": {
     "acc": 0.8709677419354839,
     "n": 62
    },
    "4-7": {
     "acc": 0.5826771653543307,
     "n": 127
    },
    "8-15": {
     "acc": 0.7107438016528925,
     "n": 121
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.16129032258064516,
     "n": 31
    },
    "8-16k": {
     "acc": 0.5646017699115045,
     "n": 565
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
   "accuracy": 0.685064935064935,
   "format_failure_rate": 0.0010822510822510823,
   "misformatted_but_content_match": 1,
   "accuracy_answered": 0.685807150595883,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.4,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.5344827586206896,
     "n": 58
    },
    "16-31": {
     "acc": 0.7698744769874477,
     "n": 239
    },
    "2-3": {
     "acc": 0.32558139534883723,
     "n": 86
    },
    "32+": {
     "acc": 0.7652173913043478,
     "n": 230
    },
    "4-7": {
     "acc": 0.5565217391304348,
     "n": 115
    },
    "8-15": {
     "acc": 0.7653061224489796,
     "n": 196
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.685064935064935,
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
   "accuracy": 0.5887445887445888,
   "format_failure_rate": 0.003246753246753247,
   "misformatted_but_content_match": 2,
   "accuracy_answered": 0.5906623235613464,
   "task_completion_rate": 0.0,
   "mean_first_error_depth": 6.666666666666667,
   "accuracy_by_staleness": {
    "0-1": {
     "acc": 0.25,
     "n": 128
    },
    "16-31": {
     "acc": 0.732620320855615,
     "n": 187
    },
    "2-3": {
     "acc": 0.32727272727272727,
     "n": 110
    },
    "32+": {
     "acc": 0.7874015748031497,
     "n": 127
    },
    "4-7": {
     "acc": 0.574468085106383,
     "n": 188
    },
    "8-15": {
     "acc": 0.7119565217391305,
     "n": 184
    }
   },
   "accuracy_by_context": {
    "16-32k": {
     "acc": 0.5887445887445888,
     "n": 924
    }
   },
   "truncated": false,
   "error": null
  }
 ]
};
