### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val
  if val = 1 #This is a conditional evaluation so it should be if val == 1
  return true
  else
  return false
  end
end

dif max a b #dif shoud be def and there is a comma missing between a and b, so this line should be def max a, b
  if a > b
      return a
  else
  b
  end
end
end #This end isn't needed

def looper
  for i in 1..10
  puts i
  end
  #Need to add return i here, otherwise the function won't return anything and therefore the looper test will always fail
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#There should be an end here

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #This line mentions the wrong function, so this line should be puts "max(100,1) failed"
  failrues = failures + 1  #There is a typo here, should be failures = failures + 1
end


if failures #failures is initialized to 0 so this will always be true, so this line should be if failures != 0
  puts "Test Failed"
else
  puts "Test Passed"
end
