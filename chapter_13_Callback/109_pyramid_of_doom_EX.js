// Step 1: Turn Red
setTimeout(() => {
    console.log("🔴 RED Light");

    // Step 2: Wait and turn Yellow (nested)
    setTimeout(() => {
        console.log("🟡 YELLOW Light");

        // Step 3: Wait and turn Green (nested)
        setTimeout(() => {
            console.log("🟢 GREEN Light - GO!");
        }, 1000);

    }, 1000);

}, 1000);