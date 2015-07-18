def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}"
end

capitalize("ryan") # prints "Ryan"
capitalize("jane") # prints "Jane"

# one liner
#["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"}
