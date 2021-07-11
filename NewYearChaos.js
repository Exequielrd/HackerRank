function minimumBribes(q) {
  let total = 0

  for (
    let current_position = 0;
    current_position < q.length;
    current_position++
  ) {
    const original_position = q[current_position] - 1
    const diff = original_position - current_position

    if (diff > 2) return console.log("Too chaotic")

    if (diff <= 0) {
      for (
        let i = Math.max(0, original_position - 1);
        i < current_position;
        i++
      ) {
        const start_position_of_fordward_person = q[i] - 1

        if (start_position_of_fordward_person > original_position) {
          total++
        }
      }
    }
  }
  console.log(total)
}

const result = minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
