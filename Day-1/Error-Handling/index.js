// Error Handling

try {
  const age = 20;
  if (age >= 18) {
    console.log("you can vote");
  } else {
    throw error;
  }
} catch (error) {
  console.log("Yo cannot vote");
}
