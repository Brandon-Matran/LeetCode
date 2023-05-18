def pipe_outputs(num_pipes, steps):
    pipes = [8] * num_pipes
    for step in steps:
        if len(step) == 2:
            pipe_idx = step[0] - 1
            new_pipe = pipes[pipe_idx] - step[1]
            old_pipe = step[1]
            pipes[pipe_idx] = old_pipe
            pipes.insert(step[0], new_pipe)
        elif len(step) == 1:
            pipe_idx = step[0] - 1
            new_pipe = pipes[pipe_idx] + pipes[step[0]]
            pipes.remove(pipes[step[0]])
            pipes[pipe_idx] = new_pipe


    return pipes


num_pipes = 3
steps = [[2, 4], [1], [1], [1,2]]
print(pipe_outputs(num_pipes, steps))
