def fibonacci(num)
  fibonacci_array = [0, 1]
  (num - 1).times do |number|
    fibonacci_array << fibonacci_array[-1] + fibonacci_array[-2]
  end
  fibonacci_array[num]

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file



# And a written explanation of your solution
