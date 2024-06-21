# Define candidates and initialize vote counts
candidates = []
votes = []

for i in range(1, 9):
    candidate_name = input(f"Enter candidate {i} name: ")
    candidates.append(candidate_name)
    votes.append(0)

# List of voters' IDs
voters_id = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
no_of_voters = len(voters_id)
print("Number of voters:", no_of_voters)

# List to track who has voted
voted = []

while True:
    # Check if all voters have voted
    if len(voters_id) == 0:
        print("Voting is over")

        # Determine the winner
        max_votes = max(votes)
        winners = [candidates[i] for i, v in enumerate(votes) if v == max_votes]

        if len(winners) == 1:
            print(f"{winners[0]} won the election with {max_votes} votes")
        else:
            print(f"It's a tie between {' and '.join(winners)} with {max_votes} votes each!")
        break
    else:
        # Accept voter ID
        voter = int(input("Enter your ID: "))
        if voter in voted:
            print("You already voted")
        elif voter in voters_id:
            # Display candidates
            for i, candidate in enumerate(candidates, start=1):
                print(f"{i}. {candidate}")
            # Accept vote
            choice = int(input("Enter your choice: "))
            if 1 <= choice <= 8:
                votes[choice - 1] += 1
                print(f"You voted for {candidates[choice - 1]}")
            else:
                print("Invalid choice")
                continue
            # Update voter lists
            voters_id.remove(voter)
            voted.append(voter)
        else:
            print("You are not allowed to vote")
