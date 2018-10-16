# Local Variables
# only available in method or loop
# 10.times do
#   x = 10
#   #p x
# end

#p x throws an error => x is only available in the local scope

#Global

# 10.times do
#   $x = 10
#   p $x
# end
#
# p $x #HORRIBLE Idea


#Instance

#@sleep_average = 7
#Only available in the specific instance, share datas from controllers and views
#share it with different instances of that method


#Constant

# TEAM = "SOPHIA TEAM"
# TEAM = "ANOTHER TEAM"
#
# p TEAM

#Class

class MyClass
  @@teams = ["A's", "Tigers"]
end #Not readily used by many programmers
