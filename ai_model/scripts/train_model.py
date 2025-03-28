import tensorflow as tf
import numpy as np
import pandas as pd
import os

# Load dataset
data_path = os.path.join(os.path.dirname(__file__), "../data/disaster_data.csv")
data = pd.read_csv(data_path)

# Separate features and labels
X = data.drop(columns=["disaster"])
y = data["disaster"]

# Create and train the model
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(16, activation='relu', input_shape=(X.shape[1],)),
    tf.keras.layers.Dense(8, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X, y, epochs=10, batch_size=32)

# Save trained model
model_path = os.path.join(os.path.dirname(__file__), "../model/disaster_model.h5")
model.save(model_path)
print(f"Model trained and saved at {model_path}")
