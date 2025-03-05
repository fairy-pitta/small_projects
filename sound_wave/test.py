import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import matplotlib.patches as patches

def animate_circular_waves_as_lines():
    # ------------------------
    # Simulation parameters
    # ------------------------
    c = 340.0         # Speed of sound (m/s)
    f = 1.0           # Frequency (Hz)
    A = 1.0           # Wave amplitude
    fps = 30          # Frames per second
    sim_duration = 3  # Total animation time in seconds
    num_frames = sim_duration * fps

    # ------------------------
    # Spatial domain
    # ------------------------
    x_min, x_max = -5.0, 5.0
    y_min, y_max = 0.0, 10.0
    Nx, Ny = 200, 200

    x_vals = np.linspace(x_min, x_max, Nx)
    y_vals = np.linspace(y_min, y_max, Ny)
    X, Y = np.meshgrid(x_vals, y_vals)

    # Sound source at top of the box
    source_x, source_y = 0.0, 1.0

    # ------------------------
    # Set up the figure
    # ------------------------
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_xlim(x_min, x_max)
    ax.set_ylim(y_min, y_max)
    ax.set_xlabel("X position (m)")
    ax.set_ylabel("Y position (m)")
    ax.set_title("Concentric Sound Waves (Black Contour Lines)")

    # ------------------------
    # Box: from y=0 to y=1, centered at x=0, width=1
    # We'll re-draw it in each frame after clearing axes.
    box_width = 1.0
    box_height = 1.0
    box_left = -box_width / 2.0
    box_bottom = 0.0

    # We'll store the patch but add it each time in the update function
    box_patch = patches.Rectangle(
        (box_left, box_bottom),
        box_width,
        box_height,
        facecolor='gray',
        edgecolor='black',
        alpha=0.8
    )

    # ------------------------
    # Contour levels
    # ------------------------
    # These are the values of the wave at which we'll draw black lines.
    # More levels = more lines. If you only want the crests (wave=0) or
    # some single value, adjust accordingly.
    levels = np.linspace(-1.0, 1.0, 11)  # e.g. -1, -0.8, ..., 0, ..., 0.8, 1

    # ------------------------
    # Animation update function
    # ------------------------
    def update(frame):
        # Clear current contour lines and patches
        ax.clear()

        # Keep the same axis limits and labels after clearing
        ax.set_xlim(x_min, x_max)
        ax.set_ylim(y_min, y_max)
        ax.set_xlabel("X position (m)")
        ax.set_ylabel("Y position (m)")
        ax.set_title("Concentric Sound Waves (Black Contour Lines)")

        # Re-draw the box
        ax.add_patch(box_patch)
        # Emitter (small marker)
        ax.plot(source_x, source_y, 'ko', markersize=5)

        # Time in seconds for this frame
        t = frame / fps

        # Distance from source at each grid point
        dist = np.sqrt((X - source_x)**2 + (Y - source_y)**2)

        # Wave amplitude
        wave = A * np.sin(2.0 * np.pi * f * (t - dist / c))

        # Draw contour lines for the wave. 'colors="black"' means black lines.
        cont = ax.contour(X, Y, wave, levels=levels, colors='black')

        return cont.collections  # Return the contour sets so FuncAnimation can update

    # ------------------------
    # Create the animation
    # ------------------------
    ani = animation.FuncAnimation(
        fig, update, frames=num_frames, interval=1000/fps, blit=False
    )

    plt.show()

if __name__ == "__main__":
    animate_circular_waves_as_lines()