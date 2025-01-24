total_seconds = int(input())

hours = total_seconds // 3600 
left_secs = total_seconds % 3600 

mins = left_secs // 60 
secs = left_secs % 60 

print(f"{hours}:{mins}:{secs}")

